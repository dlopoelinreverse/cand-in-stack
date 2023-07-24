import axios from "axios";

export default function useUserData(userId: string) {
  const userData = axios(`/api/userData/${userId}`).then((res) => res.data);

  return userData;
}
