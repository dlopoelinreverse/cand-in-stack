export default async function layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container relative top-[150px] p-10 bg-slate-400">
      {children}
    </div>
  );
}
