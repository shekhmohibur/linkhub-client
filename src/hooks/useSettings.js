// hooks/useSettings.js

import { useEffect, useState } from "react";

const defaultSettings = {
  username: "username",

  domain: "",

  isPublic: true,

  allowIndexing: true,

  emailNotifications: true,

  twoFactor: false,
};

export const useSettings = () => {
  const [settings, setSettings] = useState(() => {
    const saved = localStorage.getItem("settings");

    return {
      ...defaultSettings,

      ...(saved ? JSON.parse(saved) : {}),
    };
  });

  /* autosave */
  useEffect(() => {
    localStorage.setItem(
      "settings",

      JSON.stringify(settings),
    );
  }, [settings]);

  const update = (field, value) => {
    setSettings((prev) => ({
      ...prev,

      [field]: value,
    }));
  };

  return {
    settings,

    update,

    setSettings,
  };
};
