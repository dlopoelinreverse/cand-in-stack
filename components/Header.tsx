import AuthButton from "./AuthButton";

export default function Header() {
  return (
    <header className="fixed flex items-center justify-start h-16 mt-5 rounded-lg shadow-2xl bg-slate-200 right-20 left-20">
      <h1 className="ml-5 text-3xl font-semibold">C4ND 1N ST4CK</h1>
      <AuthButton />
    </header>
  );
}
