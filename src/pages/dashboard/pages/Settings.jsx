import { useEffect, useState } from "react";
import {
  FiGlobe,
  FiLock,
  FiTrash2,
  FiCopy,
  FiCheck,
  FiBell,
  FiKey,
} from "react-icons/fi";
import { motion } from "framer-motion";
const Toggle = ({ value, onChange }) => (
  <button
    onClick={() => onChange(!value)}
    className={`
      w-11 h-6 rounded-full relative transition
      ${value ? "bg-indigo-600" : "bg-gray-300"}
    `}
  >
    <div
      className={`
        absolute top-1 w-4 h-4 rounded-full bg-white shadow
        transition
        ${value ? "left-6" : "left-1"}
      `}
    />
  </button>
);

const defaultSettings = {
  username: "username",
  domain: "",
  isPublic: true,
  allowIndexing: true,
  emailNotifications: true,
  twoFactor: false,
};

const Settings = () => {
  const [settings, setSettings] = useState(() => {
    const saved = localStorage.getItem("intoBio_settings");
    return {
      ...defaultSettings,
      ...(saved ? JSON.parse(saved) : {}),
    };
  });

  const [copied, setCopied] = useState(false);

  useEffect(() => {
    localStorage.setItem("intoBio_settings", JSON.stringify(settings));
  }, [settings]);

  const copyLink = () => {
    navigator.clipboard.writeText(`intobio.com/${settings.username}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="max-w-4xl space-y-8"
    >
      {/* Title */}
      <motion.div variants={itemVariants}>
        <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
        <p className="text-gray-600 mt-1">
          Manage your inToBio account and preferences
        </p>
      </motion.div>

      {/* Profile Link */}
      <motion.div
        variants={itemVariants}
        className="bg-white p-6 rounded-3xl border shadow-sm"
      >
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          Profile Link
        </h2>
        <div className="flex items-center gap-3">
          <span className="text-gray-500 font-medium">intobio.com/</span>
          <input
            value={settings.username}
            onChange={(e) =>
              setSettings({
                ...settings,
                username: e.target.value,
              })
            }
            className="flex-1 bg-gray-50 px-4 py-2.5 rounded-xl border border-gray-200 focus:border-indigo-500 focus:bg-white focus:outline-none transition"
            placeholder="username"
          />
          <button
            onClick={copyLink}
            className="px-4 py-2.5 rounded-xl border border-gray-200 hover:border-indigo-500 hover:bg-indigo-50 transition flex items-center gap-2 text-gray-600"
          >
            {copied ? (
              <>
                <FiCheck className="text-green-600" /> Copied
              </>
            ) : (
              <>
                <FiCopy /> Copy
              </>
            )}
          </button>
        </div>
        <p className="text-xs text-gray-500 mt-2">
          This is your public profile URL
        </p>
      </motion.div>

      {/* Custom Domain */}
      <motion.div
        variants={itemVariants}
        className="bg-white p-6 rounded-3xl border shadow-sm"
      >
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          Custom Domain
        </h2>
        <div className="flex items-center gap-3">
          <FiGlobe className="text-gray-400" size={20} />
          <input
            placeholder="yourdomain.com"
            value={settings.domain}
            onChange={(e) =>
              setSettings({
                ...settings,
                domain: e.target.value,
              })
            }
            className="flex-1 bg-gray-50 px-4 py-2.5 rounded-xl border border-gray-200 focus:border-indigo-500 focus:bg-white focus:outline-none transition"
          />
        </div>
        <p className="text-xs text-gray-500 mt-2">
          Connect your own custom domain (Premium feature)
        </p>
      </motion.div>

      {/* Visibility Settings */}
      <motion.div variants={itemVariants} className="space-y-4">
        <h2 className="text-lg font-semibold text-gray-900">Visibility</h2>

        <div className="bg-white p-6 rounded-2xl border shadow-sm flex items-center justify-between hover:shadow-md transition">
          <div>
            <p className="font-semibold text-gray-900">Public Profile</p>
            <p className="text-sm text-gray-600">
              Allow anyone to view your profile
            </p>
          </div>
          <Toggle
            value={settings.isPublic}
            onChange={(v) =>
              setSettings({
                ...settings,
                isPublic: v,
              })
            }
          />
        </div>

        <div className="bg-white p-6 rounded-2xl border shadow-sm flex items-center justify-between hover:shadow-md transition">
          <div>
            <p className="font-semibold text-gray-900">Search Indexing</p>
            <p className="text-sm text-gray-600">
              Allow Google to index your profile
            </p>
          </div>
          <Toggle
            value={settings.allowIndexing}
            onChange={(v) =>
              setSettings({
                ...settings,
                allowIndexing: v,
              })
            }
          />
        </div>
      </motion.div>

      {/* Notification Settings */}
      <motion.div variants={itemVariants} className="space-y-4">
        <h2 className="text-lg font-semibold text-gray-900">Notifications</h2>

        <div className="bg-white p-6 rounded-2xl border shadow-sm flex items-center justify-between hover:shadow-md transition">
          <div>
            <div className="flex items-center gap-2">
              <FiBell className="text-indigo-600" size={20} />
              <p className="font-semibold text-gray-900">Email Notifications</p>
            </div>
            <p className="text-sm text-gray-600 mt-1">
              Get notified about link clicks and analytics
            </p>
          </div>
          <Toggle
            value={settings.emailNotifications}
            onChange={(v) =>
              setSettings({
                ...settings,
                emailNotifications: v,
              })
            }
          />
        </div>
      </motion.div>

      {/* Security Settings */}
      <motion.div variants={itemVariants} className="space-y-4">
        <h2 className="text-lg font-semibold text-gray-900">Security</h2>

        <div className="bg-white p-6 rounded-2xl border shadow-sm flex items-center justify-between hover:shadow-md transition">
          <div>
            <div className="flex items-center gap-2">
              <FiKey className="text-red-600" size={20} />
              <p className="font-semibold text-gray-900">
                Two-Factor Authentication
              </p>
            </div>
            <p className="text-sm text-gray-600 mt-1">
              Add an extra layer of security
            </p>
          </div>
          <Toggle
            value={settings.twoFactor}
            onChange={(v) =>
              setSettings({
                ...settings,
                twoFactor: v,
              })
            }
          />
        </div>

        <button className="w-full bg-white p-6 rounded-2xl border shadow-sm hover:shadow-md hover:border-indigo-200 transition flex items-center justify-between">
          <div className="text-left">
            <div className="flex items-center gap-2">
              <FiLock className="text-gray-600" size={20} />
              <p className="font-semibold text-gray-900">Change Password</p>
            </div>
            <p className="text-sm text-gray-600 mt-1">Update your password</p>
          </div>
          <span className="text-indigo-600 font-semibold">→</span>
        </button>
      </motion.div>

      {/* Danger Zone */}
      <motion.div variants={itemVariants} className="space-y-4">
        <h2 className="text-lg font-semibold text-red-600">Danger Zone</h2>
        <button className="w-full bg-red-50 border border-red-200 p-6 rounded-2xl hover:bg-red-100 transition flex items-center justify-between">
          <div className="text-left">
            <div className="flex items-center gap-2">
              <FiTrash2 className="text-red-600" size={20} />
              <p className="font-semibold text-red-600">Delete Account</p>
            </div>
            <p className="text-sm text-red-500 mt-1">
              Permanently delete your account and all data
            </p>
          </div>
          <span className="text-red-600 font-semibold">→</span>
        </button>
      </motion.div>
    </motion.div>
  );
};

export default Settings;
