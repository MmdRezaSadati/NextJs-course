import axios from "axios";
import { IUser } from "../types/IUser";

export const getUsers = async (): Promise<IUser[]> => {
  const res = await axios.get(
    "https://68acab60b996fea1c08a9849.mockapi.io/api/v1/users"
  );
  return res.data;
};
