
import api from "../shared/axios";
import { LoginData } from "../types/login";

export const login = async (username: string, password: string): Promise<LoginData> => {
  const response = await api.post('/login', { username, password });
  return response.data.data
}