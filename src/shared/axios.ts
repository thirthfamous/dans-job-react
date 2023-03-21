import axios, { AxiosInstance } from "axios";
import { API_URL } from "../config";

const api: AxiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
    "Content-Type": "application/json",
  },
});

export default api;
