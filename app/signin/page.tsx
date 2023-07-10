"use client";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";

export default function Signin() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") as string;
  // useModal, balancer la conenction de modal
  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <button onClick={() => signIn("google", { callbackUrl })}>
        SignIn with Google
      </button>
    </div>
  );
}
