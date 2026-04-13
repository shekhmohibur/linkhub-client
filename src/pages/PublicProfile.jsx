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
        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/profiles/u/${username}`,
        );

        setProfile(res.data.profile);
      } catch (err) {
        setError("Profile not found");
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [username]);

  /* loading */

  if (loading) {
    return (
      <div
        className="

min-h-screen

flex items-center justify-center

bg-linear-to-b

from-gray-50

to-white

"
      >
        <div
          className="

w-10 h-10

border-2

border-indigo-600

border-t-transparent

rounded-full

animate-spin

"
        />
      </div>
    );
  }

  /* error */

  if (error) {
    return (
      <div
        className="

min-h-screen

flex items-center justify-center

text-center

px-4

bg-linear-to-b

from-gray-50

to-white

"
      >
        <div>
          <h1
            className="

text-2xl

font-semibold

text-gray-900

mb-2

"
          >
            Profile not found
          </h1>

          <p className="text-gray-500 mb-6">@{username} doesn't exist</p>

          <a
            href="/"
            className="

px-5 py-2.5

rounded-xl

bg-indigo-600

text-white

"
          >
            Go home
          </a>
        </div>
      </div>
    );
  }

  /* themes */

  const themes = {
    indigo: {
      linear: "from-indigo-500 to-purple-500",

      button: "bg-indigo-600 text-white",
    },

    pink: {
      linear: "from-pink-500 to-rose-500",

      button: "bg-pink-600 text-white",
    },

    blue: {
      linear: "from-blue-500 to-cyan-500",

      button: "bg-blue-600 text-white",
    },

    green: {
      linear: "from-green-500 to-emerald-500",

      button: "bg-green-600 text-white",
    },
  };

  const theme = themes[profile.theme] || themes.indigo;

  const socialIcons = {
    instagram: FaInstagram,

    youtube: FaYoutube,

    twitter: FaTwitter,

    tiktok: FaTiktok,

    spotify: FaSpotify,
  };

  return (
    <div
      className="

min-h-screen

bg-linear-to-b

from-gray-50

via-white

to-gray-50

"
    >
      <Helmet>
        <title>
          {profile.name} (@{profile.username})
        </title>

        <meta name="description" content={profile.bio} />
      </Helmet>

      <div
        className="

max-w-md

mx-auto

px-4

pt-16

pb-24

"
      >
        {/* cover */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`

h-36

rounded-[28px]

bg-linear-to-br

${theme.linear}

shadow-sm

`}
        />

        {/* card */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="

bg-white

rounded-[28px]

shadow-xl

px-6

pb-8

pt-0

-translate-y-16

"
        >
          {/* avatar */}

          <div
            className="

flex justify-center

"
          >
            <img
              src={
                profile.avatar ||
                `https://ui-avatars.com/api/?name=${profile.name}`
              }
              className="

w-28 h-28

rounded-full

object-cover

shadow-lg

-translate-y-12

"
            />
          </div>

          {/* info */}

          <div
            className="

text-center

-translate-y-6

space-y-1

"
          >
            <h1
              className="

text-xl md:text-2xl

font-semibold

text-gray-900

"
            >
              {profile.name}
            </h1>

            <p
              className="

text-gray-400

text-sm

"
            >
              @{profile.username}
            </p>

            {profile.bio && (
              <p
                className="

text-gray-500

text-sm

max-w-xs

mx-auto

"
              >
                {profile.bio}
              </p>
            )}
          </div>

          {/* socials */}

          {profile.socialLinks?.length > 0 && (
            <div
              className="

flex justify-center

gap-4

mb-6

text-gray-400

"
            >
              {profile.socialLinks.map((s, i) => {
                const Icon = socialIcons[s.platform] || FaLink;

                return (
                  <a
                    key={i}
                    href={s.url}
                    target="_blank"
                    className="

hover:text-indigo-600

transition

"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          )}

          {/* links */}

          <div className="space-y-3">
            {profile.links?.length > 0 ? (
              profile.links.map((link) => (
                <a
                  key={link._id}
                  href={link.url}
                  target="_blank"
                  onClick={() => {
                    axios.post(
                      `${import.meta.env.VITE_API_URL}/links/${link._id}/click`,
                    );
                  }}
                  className={`

block

w-full

py-3.5

rounded-xl

text-center

font-medium

shadow-sm

hover:shadow-md

transition

hover:-translate-y-px

${theme.button}

`}
                >
                  {link.title}
                </a>
              ))
            ) : (
              <p
                className="

text-center

text-gray-400

py-6

"
              >
                No links yet
              </p>
            )}
          </div>

          {/* footer */}

          <p
            className="

text-center

text-xs

text-gray-400

mt-8

"
          >
            inToBio
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default PublicProfile;
