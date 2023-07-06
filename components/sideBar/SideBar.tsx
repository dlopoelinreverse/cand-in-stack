import { getUserId } from "@/utils/getUserId";
import Login from "./Login";
import User from "./User";
import NavBar from "../NavBar";
import Link from "next/link";

export default async function SideBar() {
  const isLoggedIn = await getUserId();
  return (
    <>
      <div className="w-[30%] bg-slate-300 container flex flex-col items-center ">
        <Link href="/">
          <div className="px-10 py-5 mt-5 rounded-full shadow-lg bg-slate-500">
            <h1 className="text-3xl font-semibold">Cand In Stack</h1>
          </div>
        </Link>
        <div className="mt-10">{isLoggedIn ? <User /> : <Login />}</div>
        <NavBar />
      </div>
    </>
  );
}
