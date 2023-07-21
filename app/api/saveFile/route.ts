import { join } from "path";
import { stat, mkdir, writeFile, unlink } from "fs/promises";
import { NextRequest, NextResponse } from "next/server";
import { getSessionFromServer } from "@/app/libs/db/reccurentChecks";
import { sessionError } from "@/app/libs/db/errors";
import { v4 } from "uuid";
import { prisma } from "@/app/libs/prismadb";
export async function POST(request: NextRequest) {
  const formData = await request.formData();

  const session = await getSessionFromServer();

  if (!session) return sessionError;

  const file = formData.get("file") as Blob | null;
  if (!file) {
    return NextResponse.json(
      { error: "File blob is required." },
      { status: 400 }
    );
  }

  if (file.type !== "application/pdf")
    return NextResponse.json(
      { error: "File error, type needs to be PDF." },
      { status: 400 }
    );

  const buffer = Buffer.from(await file.arrayBuffer());
  const relativeUploadDir = `/uploads/resume`;
  const uploadDir = join(process.cwd(), "public", relativeUploadDir);

  try {
    await stat(uploadDir);
  } catch (error: any) {
    if (error.code === "ENOENT") {
      await mkdir(uploadDir, { recursive: true });
    } else {
      console.error(
        "Error while trying to create directory when uploading a file\n",
        error
      );
      return NextResponse.json(
        { error: "Something went wrong." },
        { status: 500 }
      );
    }
  }

  try {
    const userData = await prisma.user.findFirst({
      where: { id: session.user.id },
    });
    if (userData?.resumeUuid) {
      try {
        await unlink(`${uploadDir}/${userData?.resumeUuid}`);
      } catch (error) {
        console.error("Error while trying remove the old resume\n", error);
        return NextResponse.json(
          { error: "Something went wrong." },
          { status: 500 }
        );
      }
    }
  } catch (error) {
    console.error("Error while trying to get the user data\n", error);
    return NextResponse.json(
      { error: "Something went wrong." },
      { status: 500 }
    );
  }

  try {
    const filename = `${v4()}.pdf`;
    await writeFile(`${uploadDir}/${filename}`, buffer);
    // '/uploads/resume/'
    return NextResponse.json({ filename });
  } catch (error) {
    console.error("Error while trying to upload a file\n", error);
    return NextResponse.json(
      { error: "Something went wrong." },
      { status: 500 }
    );
  }
}
