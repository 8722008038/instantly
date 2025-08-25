import axios from "axios";
import { refreshToken, logout } from "./authService";

const api = axios.create({
  baseURL: "http://localhost:5000",
});

// Attach token to requests
api.interceptors.request.use(async (config) => {
  const token = localStorage.getItem("accessToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Handle expired token
api.interceptors.response.use(
  (res) => res,
  async (err) => {
    const originalRequest = err.config;
    if (err.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const newToken = await refreshToken();
        if (newToken) {
          originalRequest.headers.Authorization = `Bearer ${newToken}`;
          return api(originalRequest);
        }
      } catch (e) {
        logout();
        window.location.href = "/login";
      }
    }
    return Promise.reject(err);
  }
);

export default api;
