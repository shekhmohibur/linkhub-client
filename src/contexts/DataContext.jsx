import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";
import { profileAPI, linksAPI, analyticsAPI } from "../services/api";
import useAuth from "../hooks/useAuth";

const DataContext = createContext();

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useData must be used within a DataProvider");
  }
  return context;
};

export const DataProvider = ({ children }) => {
  const { user, isAuthenticated } = useAuth();
  const [profile, setProfile] = useState(null);
  const [links, setLinks] = useState([]);
  const [analytics, setAnalytics] = useState(null);
  const [loading, setLoading] = useState(false);

  const loadFromLocalStorage = () => {
    try {
      const savedProfile = JSON.parse(localStorage.getItem("intoBio_profile"));
      if (savedProfile) setProfile(savedProfile);

      const savedLinks = JSON.parse(localStorage.getItem("intoBio_links"));
      if (savedLinks) setLinks(savedLinks);
    } catch (error) {
      console.error("Failed to load from localStorage:", error);
    }
  };

  const loadUserData = useCallback(async () => {
    if (!user?.id) return;

    setLoading(true);
    try {
      const [profileRes, linksRes, analyticsRes] = await Promise.all([
        profileAPI.getProfile(user.id),
        linksAPI.getLinks(user.id),
        analyticsAPI.getAnalytics(user.id),
      ]);

      setProfile(profileRes.data);
      setLinks(linksRes.data);
      setAnalytics(analyticsRes.data);
    } catch (error) {
      console.error("Failed to load user data:", error);
      // Fallback to localStorage if API fails
      loadFromLocalStorage();
    } finally {
      setLoading(false);
    }
  }, [user?.id]);

  // Load data when user logs in
  useEffect(() => {
    if (isAuthenticated && user) {
      loadUserData();
    } else {
      // Reset data when logged out
      setProfile(null);
      setLinks([]);
      setAnalytics(null);
    }
  }, [isAuthenticated, user, loadUserData]);

  const updateProfile = async (data) => {
    if (!user?.id) return;

    try {
      const response = await profileAPI.updateProfile(user.id, data);
      setProfile(response.data);
    } catch (error) {
      console.error("Failed to update profile:", error);
      // Update locally
      setProfile((prev) => ({ ...prev, ...data }));
    }
  };

  const uploadAvatar = async (file) => {
    if (!user?.id) return;

    try {
      const response = await profileAPI.uploadAvatar(user.id, file);
      setProfile((prev) => ({ ...prev, avatar: response.data.avatarUrl }));
    } catch (error) {
      console.error("Failed to upload avatar:", error);
    }
  };

  const addLink = async (linkData) => {
    if (!user?.id) return;

    try {
      const response = await linksAPI.createLink(user.id, linkData);
      setLinks((prev) => [...prev, response.data]);
    } catch (error) {
      console.error("Failed to add link:", error);
      // Add locally
      const newLink = { ...linkData, id: Date.now() };
      setLinks((prev) => [...prev, newLink]);
    }
  };

  const updateLink = async (linkId, data) => {
    if (!user?.id) return;

    try {
      const response = await linksAPI.updateLink(user.id, linkId, data);
      setLinks((prev) =>
        prev.map((link) => (link.id === linkId ? response.data : link)),
      );
    } catch (error) {
      console.error("Failed to update link:", error);
      // Update locally
      setLinks((prev) =>
        prev.map((link) => (link.id === linkId ? { ...link, ...data } : link)),
      );
    }
  };

  const deleteLink = async (linkId) => {
    if (!user?.id) return;

    try {
      await linksAPI.deleteLink(user.id, linkId);
      setLinks((prev) => prev.filter((link) => link.id !== linkId));
    } catch (error) {
      console.error("Failed to delete link:", error);
      // Delete locally
      setLinks((prev) => prev.filter((link) => link.id !== linkId));
    }
  };

  const reorderLinks = async (newOrder) => {
    if (!user?.id) return;

    try {
      await linksAPI.reorderLinks(user.id, newOrder);
      setLinks(newOrder);
    } catch (error) {
      console.error("Failed to reorder links:", error);
      // Reorder locally
      setLinks(newOrder);
    }
  };

  const value = {
    profile,
    links,
    analytics,
    loading,
    updateProfile,
    uploadAvatar,
    addLink,
    updateLink,
    deleteLink,
    reorderLinks,
    refreshData: loadUserData,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};
