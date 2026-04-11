import axios from 'axios';

// Base URL for the API - change this to your server URL
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

// Create axios instance with default config
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor to add auth token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor to handle errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Token expired or invalid
      localStorage.removeItem('authToken');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// Auth API
export const authAPI = {
  login: (credentials) => api.post('/auth/login', credentials),
  register: (userData) => api.post('/auth/register', userData),
  googleLogin: (token) => api.post('/auth/google', { token }),
  logout: () => api.post('/auth/logout'),
  getProfile: () => api.get('/auth/profile'),
};

// Profile API
export const profileAPI = {
  getProfile: (userId) => api.get(`/profiles/${userId}`),
  updateProfile: (userId, data) => api.put(`/profiles/${userId}`, data),
  uploadAvatar: (userId, file) => {
    const formData = new FormData();
    formData.append('avatar', file);
    return api.post(`/profiles/${userId}/avatar`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
  },
};

// Links API
export const linksAPI = {
  getLinks: (userId) => api.get(`/users/${userId}/links`),
  createLink: (userId, linkData) => api.post(`/users/${userId}/links`, linkData),
  updateLink: (userId, linkId, linkData) => api.put(`/users/${userId}/links/${linkId}`, linkData),
  deleteLink: (userId, linkId) => api.delete(`/users/${userId}/links/${linkId}`),
  reorderLinks: (userId, linkOrder) => api.put(`/users/${userId}/links/reorder`, { order: linkOrder }),
};

// Analytics API
export const analyticsAPI = {
  getAnalytics: (userId, period = '7d') => api.get(`/users/${userId}/analytics?period=${period}`),
  trackClick: (linkId) => api.post(`/links/${linkId}/click`),
  trackView: (userId) => api.post(`/profiles/${userId}/view`),
};

export default api;