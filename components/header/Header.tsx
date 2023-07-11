import Link from "next/link";
import PageTitle from "./PageTitle";
import AuthButton from "../authentication/AuthButton";
import UserBox from "../user/UserBox";
import NavBarUserDispatchLinks from "../navBar/NavBarUserDispatchLinks";

export default function Header() {
  return (
    <header className="flex flex-col w-full px-5">
      <div className="flex items-center w-full h-20">
        <div className="flex items-baseline w-1/4">
          <Link href="/">
            <h1 className="text-5xl font-bold ">CandInStack</h1>
          </Link>
          <PageTitle />
        </div>
        <div className="flex justify-end w-3/4">
          <UserBox />
        </div>
      </div>
      <div className="my-5">
        <NavBarUserDispatchLinks />
      </div>
    </header>
  );
}
