import { useEffect, useState } from "react";

import {
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaGlobe,
  FaUpload,
} from "react-icons/fa";

import { useData } from "../../../contexts/DataContext";

// theme config (no Tailwind dynamic bug)
const themes = {
  indigo: {
    gradient: "from-indigo-500 to-purple-500",
    soft: "bg-indigo-50 text-indigo-600",
    solid: "bg-indigo-600 text-white",
    outline: "border border-indigo-400 text-indigo-600",
  },

  purple: {
    gradient: "from-purple-500 to-fuchsia-500",
    soft: "bg-purple-50 text-purple-600",
    solid: "bg-purple-600 text-white",
    outline: "border border-purple-400 text-purple-600",
  },

  blue: {
    gradient: "from-blue-500 to-cyan-500",
    soft: "bg-blue-50 text-blue-600",
    solid: "bg-blue-600 text-white",
    outline: "border border-blue-400 text-blue-600",
  },

  emerald: {
    gradient: "from-emerald-500 to-teal-500",
    soft: "bg-emerald-50 text-emerald-600",
    solid: "bg-emerald-600 text-white",
    outline: "border border-emerald-400 text-emerald-600",
  },

  rose: {
    gradient: "from-rose-500 to-pink-500",
    soft: "bg-rose-50 text-rose-600",
    solid: "bg-rose-600 text-white",
    outline: "border border-rose-400 text-rose-600",
  },

  orange: {
    gradient: "from-orange-500 to-amber-500",
    soft: "bg-orange-50 text-orange-600",
    solid: "bg-orange-600 text-white",
    outline: "border border-orange-400 text-orange-600",
  },
};

const Profile = () => {
  const { profile, updateProfile } = useData();

  const defaultProfile = {
    name: "Your Name",

    username: "username",

    bio: "Creator • Designer • Developer",

    avatar: "https://i.pravatar.cc/150",

    theme: "indigo",

    buttonStyle: "solid",

    socials: {
      instagram: "",

      youtube: "",

      twitter: "",

      website: "",
    },
  };

  const [data, setData] = useState(profile || defaultProfile);

  useEffect(() => {
    if (profile && JSON.stringify(profile) !== JSON.stringify(data)) {
      setData(profile);
    }
  }, [profile]);

  const handleUpdateProfile = (updates) => {
    const newData = { ...data, ...updates };
    setData(newData);
    updateProfile(newData);
  };

  const theme = themes[data.theme];

  return (
    <div className="grid lg:grid-cols-2 gap-14">
      {/* EDITOR */}
      <div className="space-y-6">
        <h1 className="text-2xl font-semibold tracking-tight">
          Profile Design
        </h1>

        {/* profile card */}
        <div className="bg-white p-6 rounded-3xl border shadow-sm space-y-5">
          <div className="flex items-center gap-4">
            <img
              src={data.avatar}
              className="w-16 h-16 rounded-full object-cover ring-4 ring-gray-100"
            />

            <label className="cursor-pointer text-sm px-3 py-2 rounded-xl border hover:border-gray-400">
              Upload photo
              <input
                type="file"
                hidden
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (file) {
                    const reader = new FileReader();
                    reader.onloadend = () => {
                      handleUpdateProfile({ avatar: reader.result });
                    };
                    reader.readAsDataURL(file);
                  }
                }}
              />
            </label>
          </div>

          <input
            value={data.name}
            onChange={(e) => handleUpdateProfile({ name: e.target.value })}
            placeholder="name"
            className="w-full bg-gray-50 px-4 py-2.5 rounded-xl"
          />

          <input
            value={data.username}
            onChange={(e) => handleUpdateProfile({ username: e.target.value })}
            placeholder="username"
            className="w-full bg-gray-50 px-4 py-2.5 rounded-xl"
          />

          <textarea
            value={data.bio}
            onChange={(e) => handleUpdateProfile({ bio: e.target.value })}
            placeholder="bio"
            className="w-full bg-gray-50 px-4 py-2.5 rounded-xl"
          />
        </div>

        {/* theme */}
        <div className="bg-white p-6 rounded-3xl border shadow-sm">
          <h2 className="text-sm text-gray-500 mb-3">Theme</h2>

          <div className="flex gap-3">
            {Object.keys(themes).map((color) => (
              <button
                key={color}
                onClick={() => handleUpdateProfile({ theme: color })}
                className={`
w-9 h-9 rounded-xl

bg-linear-to-br ${themes[color].gradient}

${data.theme === color ? "ring-2 ring-offset-2" : ""}

`}
              />
            ))}
          </div>
        </div>

        {/* button style */}
        <div className="bg-white p-6 rounded-3xl border shadow-sm">
          <h2 className="text-sm text-gray-500 mb-3">Button style</h2>

          <div className="flex gap-2">
            {["solid", "soft", "outline"].map((style) => (
              <button
                key={style}
                onClick={() => handleUpdateProfile({ buttonStyle: style })}
                className={`
px-4 py-2 rounded-xl text-sm border

${
  data.buttonStyle === style ? "border-gray-900 text-gray-900" : "text-gray-400"
}

`}
              >
                {style}
              </button>
            ))}
          </div>
        </div>

        {/* social */}
        <div className="bg-white p-6 rounded-3xl border shadow-sm space-y-3">
          <h2 className="text-sm text-gray-500">Social links</h2>

          {Object.keys(data.socials).map((key) => (
            <div key={key} className="flex items-center gap-2">
              <span className="text-gray-400 w-6">
                {key === "instagram" && <FaInstagram />}

                {key === "youtube" && <FaYoutube />}

                {key === "twitter" && <FaTwitter />}

                {key === "website" && <FaGlobe />}
              </span>

              <input
                value={data.socials[key]}
                onChange={(e) =>
                  handleUpdateProfile({
                    socials: {
                      ...data.socials,
                      [key]: e.target.value,
                    },
                  })
                }
                placeholder={key}
                className="w-full bg-gray-50 px-3 py-2 rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>

      {/* LIVE PREVIEW */}
      <div className="flex justify-center">
        <div className="w-85 max-h-fit fixed p-6 rounded-[42px] border bg-white shadow-xl">
          {/* cover */}
          <div
            className={`

h-36

rounded-3xl

bg-linear-to-br ${theme.gradient}

`}
          />

          {/* avatar */}
          <img
            src={data.avatar}
            className="w-20 h-20 rounded-full border-4 border-white shadow -mt-10 mx-auto"
          />

          <div className="text-center mt-3">
            <h3 className="font-semibold text-lg">{data.name}</h3>

            <p className="text-gray-500 text-sm">@{data.username}</p>

            <p className="mt-2 text-sm">{data.bio}</p>
          </div>

          {/* social icons */}
          <div className="flex justify-center gap-4 mt-4 text-gray-500">
            {data.socials.instagram && <FaInstagram />}

            {data.socials.youtube && <FaYoutube />}

            {data.socials.twitter && <FaTwitter />}

            {data.socials.website && <FaGlobe />}
          </div>

          {/* links */}
          <div className="space-y-3 mt-6">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className={`

py-2.5

text-center

rounded-xl

font-medium

transition


${data.buttonStyle === "solid" && theme.solid}

${data.buttonStyle === "soft" && theme.soft}

${data.buttonStyle === "outline" && theme.outline}

`}
              >
                Sample link
              </div>
            ))}
          </div>

          <p className="text-center text-xs text-gray-400 mt-6">inToBio</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
