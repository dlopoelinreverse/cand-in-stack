export default function Header({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <header>
      <h1 className="mt-10 ml-20 text-5xl mx- ">{title}</h1>

      {children}
    </header>
  );
}
