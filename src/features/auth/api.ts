import { api } from "@/lib/axios";
import { authResponseSchema, authStatusResponseSchema, userSchema } from "./schemas";

export const authApi = {
  // Verificar estado
  checkStatus: async () => {
    const response = await api.get("/auth/status");
    return authStatusResponseSchema.parse(response.data);
  },

  // Obtener usuario actual
  getMe: async () => {
    const response = await api.get("/auth/me");
    return userSchema.parse(response.data);
  },

  // Login con Google
  loginWithGoogle: () => {
    window.location.href = `${api.defaults.baseURL}/auth/google`;
  },

  // Logout
  logout: async () => {
    await api.post("/auth/logout");
  },

  // Refrescar token
  refresh: async () => {
    const response = await api.post("/auth/refresh");
    return authResponseSchema.parse(response.data);
  },
};
