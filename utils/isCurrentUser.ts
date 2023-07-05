import { getUserId } from "./getUserId";

export const isCurrentUser = async (paramsUserId: string) => {
  const userId = await getUserId();

  if (!userId) return false;

  return String(userId) === paramsUserId;
};
