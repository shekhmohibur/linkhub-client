import { useParams } from "react-router";
import { motion } from "framer-motion";
import {
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaTiktok,
  FaSpotify,
  FaLink,
} from "react-icons/fa";
import { useEffect, useState } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";

const PublicProfile = () => {
  const { username } = useParams();
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/profiles/u/${username}`,
        );
        setProfile(response.data.profile);
        setLoading(false);
      } catch (err) {
        setError(err.response?.data?.error || "Profile not found");
        setLoading(false);
      }
    };

    if (username) {
      fetchProfile();
    }
  }, [username]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  if (error || !profile) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Profile Not Found
          </h1>
          <p className="text-gray-600 mb-8">
            The profile @{username} doesn't exist or is not available.
          </p>
          <a
            href="/"
            className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition"
          >
            Go Home
          </a>
        </div>
      </div>
    );
  }

  const themeConfig = {
    indigo: {
      gradient: "from-indigo-500 to-purple-500",
      solid: "bg-indigo-600 text-white hover:bg-indigo-700",
      soft: "bg-indigo-50 text-indigo-600 hover:bg-indigo-100",
      outline: "border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50",
    },
    pink: {
      gradient: "from-pink-500 to-rose-500",
      solid: "bg-pink-600 text-white hover:bg-pink-700",
      soft: "bg-pink-50 text-pink-600 hover:bg-pink-100",
      outline: "border-2 border-pink-600 text-pink-600 hover:bg-pink-50",
    },
    green: {
      gradient: "from-green-500 to-emerald-500",
      solid: "bg-green-600 text-white hover:bg-green-700",
      soft: "bg-green-50 text-green-600 hover:bg-green-100",
      outline: "border-2 border-green-600 text-green-600 hover:bg-green-50",
    },
    blue: {
      gradient: "from-blue-500 to-cyan-500",
      solid: "bg-blue-600 text-white hover:bg-blue-700",
      soft: "bg-blue-50 text-blue-600 hover:bg-blue-100",
      outline: "border-2 border-blue-600 text-blue-600 hover:bg-blue-50",
    },
  };

  const currentTheme = themeConfig[profile.theme] || themeConfig.indigo;

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
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50">
      <Helmet>
        <title>
          {profile.name} (@{profile.username}) - LinkHub
        </title>
        <meta
          name="description"
          content={profile.bio || `${profile.name}'s LinkHub profile`}
        />
        <meta
          property="og:title"
          content={`${profile.name} (@${profile.username}) - LinkHub`}
        />
        <meta
          property="og:description"
          content={profile.bio || `${profile.name}'s LinkHub profile`}
        />
        <meta
          property="og:image"
          content={profile.avatar || "/default-avatar.png"}
        />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:type" content="profile" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={`${profile.name} (@${profile.username}) - LinkHub`}
        />
        <meta
          name="twitter:description"
          content={profile.bio || `${profile.name}'s LinkHub profile`}
        />
        <meta
          name="twitter:image"
          content={profile.avatar || "/default-avatar.png"}
        />
      </Helmet>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-md mx-auto px-4 py-12 md:py-16"
      >
        <motion.div
          variants={itemVariants}
          className={`h-32 rounded-3xl bg-gradient-to-br ${currentTheme.gradient} mb-0`}
          style={
            profile.backgroundColor
              ? { background: profile.backgroundColor }
              : {}
          }
        />

        <motion.div
          variants={itemVariants}
          className="bg-white rounded-3xl shadow-2xl px-6 pt-0 pb-8 -mt-12 relative z-10"
        >
          <div className="flex justify-center -mt-16 mb-4">
            <img
              src={
                profile.avatar ||
                `https://ui-avatars.com/api/?name=${profile.name}&size=112&background=6366f1&color=fff`
              }
              alt={profile.name}
              className="w-28 h-28 rounded-full object-cover border-4 border-white shadow-lg"
            />
          </div>

          <motion.div variants={itemVariants} className="text-center mb-6">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              {profile.name}
            </h1>
            <p className="text-gray-600">@{profile.username}</p>
            {profile.bio && (
              <p className="text-gray-600 text-sm mt-2">{profile.bio}</p>
            )}
          </motion.div>

          {profile.socialLinks && profile.socialLinks.length > 0 && (
            <motion.div
              variants={itemVariants}
              className="flex justify-center gap-4 mb-8 text-gray-500"
            >
              {profile.socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-indigo-600 transition"
                >
                  {social.platform === "instagram" && <FaInstagram size={20} />}
                  {social.platform === "youtube" && <FaYoutube size={20} />}
                  {social.platform === "twitter" && <FaTwitter size={20} />}
                  {social.platform === "tiktok" && <FaTiktok size={20} />}
                  {social.platform === "spotify" && <FaSpotify size={20} />}
                  {![
                    "instagram",
                    "youtube",
                    "twitter",
                    "tiktok",
                    "spotify",
                  ].includes(social.platform) && <FaLink size={20} />}
                </a>
              ))}
            </motion.div>
          )}

          <motion.div variants={itemVariants} className="space-y-3">
            {profile.links && profile.links.length > 0 ? (
              profile.links.map((link) => (
                <a
                  key={link._id}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => {
                    axios.post(
                      `${import.meta.env.VITE_API_URL}/links/${link._id}/click`,
                    );
                  }}
                  className={`block w-full py-4 px-6 rounded-xl font-medium text-center transition-all duration-200 ${currentTheme.solid} shadow-lg hover:shadow-xl transform hover:-translate-y-0.5`}
                >
                  <div className="flex items-center justify-center gap-2">
                    {link.icon && <span className="text-lg">{link.icon}</span>}
                    <span>{link.title}</span>
                  </div>
                </a>
              ))
            ) : (
              <div className="text-center py-8 text-gray-500">
                <p>No links available yet.</p>
              </div>
            )}
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-8 pt-6 border-t border-gray-100 text-center text-xs text-gray-500"
          >
            <p>Made with LinkHub ✨</p>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default PublicProfile;
