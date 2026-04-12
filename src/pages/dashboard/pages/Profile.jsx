import { useEffect, useState } from "react";

import { FaInstagram, FaYoutube, FaTwitter, FaGlobe } from "react-icons/fa";

import { useData } from "../../../contexts/DataContext";
import { themes } from "../../../config/themes";

const Profile = () => {
  const { profile, updateProfile, links } = useData();

  const [data, setData] = useState({
    name: "",
    username: "",
    bio: "",
    avatar: "https://i.pravatar.cc/150",
    theme: "indigo",
    buttonStyle: "solid",
    socials: {
      instagram: "",
      youtube: "",
      twitter: "",
      website: "",
    },
  });

  /* auto load */
  useEffect(() => {
    if (profile) setData(profile);
  }, [profile]);

  /* auto save */
  useEffect(() => {
    updateProfile(data);
  }, [data]);

  /* update helper */
  const update = (field, value) => {
    setData((prev) => ({
      ...prev,

      [field]: value,
    }));
  };

  const updateSocial = (key, value) => {
    setData((prev) => ({
      ...prev,

      socials: {
        ...prev.socials,

        [key]: value,
      },
    }));
  };

  const theme = themes[data.theme];

  return (
    <div className="grid lg:grid-cols-2 gap-12">
      {/* LEFT */}

      <div className="space-y-6">
        <h1 className="text-2xl font-semibold">Profile</h1>

        {/* avatar */}

        <div className="bg-white p-6 rounded-3xl border space-y-4">
          <img
            src={data.avatar}
            className="w-20 h-20 rounded-full object-cover"
          />

          <input
            type="file"
            onChange={(e) => {
              const file = e.target.files[0];

              const reader = new FileReader();

              reader.onloadend = () => update("avatar", reader.result);

              if (file) reader.readAsDataURL(file);
            }}
          />

          <input
            value={data.name}
            onChange={(e) => update("name", e.target.value)}
            placeholder="Name"
            className="w-full bg-gray-50 px-4 py-2 rounded-xl"
          />

          <input
            value={data.username}
            onChange={(e) => update("username", e.target.value)}
            placeholder="Username"
            className="w-full bg-gray-50 px-4 py-2 rounded-xl"
          />

          <textarea
            value={data.bio}
            onChange={(e) => update("bio", e.target.value)}
            placeholder="Bio"
            className="w-full bg-gray-50 px-4 py-2 rounded-xl"
          />
        </div>

        {/* themes */}

        <div className="bg-white p-6 rounded-3xl border">
          <h2 className="text-sm mb-3 text-gray-500">Themes</h2>

          <div className="grid grid-cols-6 gap-3">
            {Object.entries(themes).map(([key, t]) => (
              <button
                key={key}
                onClick={() => update("theme", key)}
                className={`

w-10 h-10 rounded-xl

bg-linear-to-br ${t.gradient}

${data.theme === key ? "ring-2 ring-offset-2" : ""}

`}
              />
            ))}
          </div>
        </div>

        {/* button style */}

        <div className="bg-white p-6 rounded-3xl border">
          <h2 className="text-sm mb-3 text-gray-500">Button style</h2>

          <div className="flex gap-2">
            {["solid", "soft", "outline"].map((style) => (
              <button
                key={style}
                onClick={() => update("buttonStyle", style)}
                className={`

px-4 py-2 rounded-xl border text-sm

${data.buttonStyle === style ? "border-black" : "text-gray-400"}

`}
              >
                {style}
              </button>
            ))}
          </div>
        </div>

        {/* socials */}

        <div className="bg-white p-6 rounded-3xl border space-y-3">
          <h2 className="text-sm text-gray-500">Social links</h2>

          {Object.keys(data.socials).map((key) => (
            <div key={key} className="flex gap-2">
              <span className="text-gray-400">
                {key === "instagram" && <FaInstagram />}

                {key === "youtube" && <FaYoutube />}

                {key === "twitter" && <FaTwitter />}

                {key === "website" && <FaGlobe />}
              </span>

              <input
                value={data.socials[key]}
                onChange={(e) => updateSocial(key, e.target.value)}
                placeholder={key}
                className="w-full bg-gray-50 px-3 py-2 rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>

      {/* PHONE */}

      <div className="flex justify-center">
        <div
          className="

relative

w-[340px]

h-[690px]

bg-black

rounded-[50px]

p-[10px]

shadow-2xl

"
        >
          <div
            className={`

relative

w-full

h-full

rounded-[40px]

overflow-hidden

${theme.bg}

${theme.text}

`}
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150px] h-[28px] bg-black rounded-b-xl" />

            <div className="overflow-y-auto h-full pb-10">
              <div className={`h-40 bg-linear-to-br ${theme.gradient}`} />

              <img
                src={data.avatar}
                className="w-24 h-24 rounded-full border-4 border-white shadow -mt-12 mx-auto"
              />

              <div className="text-center mt-3 px-6">
                <h3 className="font-semibold text-lg">
                  {data.name || "Your Name"}
                </h3>

                <p className="text-sm opacity-70">
                  @{data.username || "username"}
                </p>

                <p className="mt-2 text-sm opacity-80">{data.bio || "bio"}</p>
              </div>

              <div className="flex justify-center gap-4 mt-4 text-xl">
                {data.socials.instagram && <FaInstagram />}

                {data.socials.youtube && <FaYoutube />}

                {data.socials.twitter && <FaTwitter />}

                {data.socials.website && <FaGlobe />}
              </div>

              <div className="px-6 mt-6 space-y-3">
                {links
                  ?.filter((l) => l.visible)

                  .map((link) => (
                    <div
                      key={link.id}
                      className={`

py-3

rounded-xl

text-center

font-medium

transition

${data.buttonStyle === "solid" && theme.solid}

${data.buttonStyle === "soft" && theme.soft}

${data.buttonStyle === "outline" && theme.outline}

`}
                    >
                      {link.title}
                    </div>
                  ))}
              </div>

              <p className="text-center text-xs opacity-40 mt-8">inToBio</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
