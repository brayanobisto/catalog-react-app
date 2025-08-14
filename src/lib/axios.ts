import axios from "axios";
import { env } from "@/config/env";

export const api = axios.create({
  baseURL: env.VITE_API_BASE_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

// Interceptor para manejar errores de autenticación
api.interceptors.response.use(
  (response) => response,
  (response) => {
    if (response?.status === 401) {
      // Redirigir a login si no está autenticado
      window.location.href = "/login";
    }
    return Promise.reject(response);
  }
);
