import { isCurrentUser } from "@/app/utils/isCurrentUser";

export default async function layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
