import { NextResponse } from "next/server";

export const sessionError = new NextResponse(
  "No session, you have to be authenticated",
  { status: 401 }
);

export const invalidOfferIdError = new NextResponse("Can't find this offerId", {
  status: 401,
});

export const invalidUserIdError = new NextResponse("Can't find this userId", {
  status: 401,
});

export const prismaError = (error: unknown) => {
  return new NextResponse(JSON.stringify(error), { status: 501 });
};
