import axios from "axios";

// Base URL for the API - change this to your server URL
const API_BASE_URL =
  import.meta.env.VITE_API_URL || "http://localhost:5000/api";

// Create axios instance with default config
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor to add auth token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("authToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// Response interceptor to handle errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Token expired or invalid
      localStorage.removeItem("authToken");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  },
);

// Auth API
export const authAPI = {
  login: (credentials) => api.post("/auth/login", credentials),
  register: (userData) => api.post("/auth/register", userData),
  googleLogin: (token) => api.post("/auth/google", { token }),
  logout: () => api.post("/auth/logout"),
  getProfile: () => api.get("/auth/profile"),
};
// Profile API
export const profileAPI = {
  getMyProfile: () => api.get("/auth/profile"),

  updateProfile: (data) => api.put("/profiles/me", data),

  uploadAvatar: (file) => {
    const formData = new FormData();

    formData.append("avatar", file);

    return api.post(
      "/profiles/avatar",

      formData,

      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      },
    );
  },
};

// Links API
export const linksAPI = {
  getLinks: () => api.get("/links"),

  createLink: (data) => api.post("/links", data),

  updateLink: (linkId, data) => api.put(`/links/${linkId}`, data),

  deleteLink: (linkId) => api.delete(`/links/${linkId}`),

  reorderLinks: (order) => api.put("/links/reorder", { order }),
};

// Analytics API
export const analyticsAPI = {
  getAnalytics: (period = "7d") => api.get(`/analytics?period=${period}`),

  trackClick: (linkId) => api.post(`/links/${linkId}/click`),

  trackView: () => api.post("/profiles/view"),
};
