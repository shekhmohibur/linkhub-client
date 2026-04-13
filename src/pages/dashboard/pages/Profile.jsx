import { useEffect, useState } from "react";

import { FaInstagram, FaYoutube, FaTwitter, FaGlobe } from "react-icons/fa";

import { themes } from "../../../config/themes";

import { useProfile } from "../../../hooks/useProfile";

import { useUpdateProfile } from "../../../hooks/useUpdateProfile";

import { useLinks } from "../../../hooks/useLinks";

const Profile = () => {
  const { data: profile, isLoading } = useProfile();

  const { mutate: updateProfile } = useUpdateProfile();

  const { data: links } = useLinks();

  const [data, setData] = useState(null);

  /* load data */

  useEffect(() => {
    if (profile) {
      setData({
        name: profile.name || "",

        username: profile.username || "",

        bio: profile.bio || "",

        avatar: profile.avatar || "https://i.pravatar.cc/150",

        theme: profile.theme || "indigo",

        buttonStyle: profile.buttonStyle || "solid",

        socials: profile.socialLinks || {
          instagram: "",

          youtube: "",

          twitter: "",

          website: "",
        },
      });
    }
  }, [profile]);

  /* autosave */

  useEffect(() => {
    if (!data) return;

    const timeout = setTimeout(() => {
      updateProfile(data);
    }, 700);

    return () => clearTimeout(timeout);
  }, [data]);

  if (isLoading || !data) {
    return (
      <div
        className="

flex items-center justify-center

h-[60vh]

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
    <div
      className="

grid

lg:grid-cols-2

gap-10 lg:gap-14

"
    >
      {/* LEFT */}

      <div className="space-y-6">
        <h1
          className="

text-2xl

font-semibold

"
        >
          Profile
        </h1>

        {/* card */}

        <div
          className="

bg-white

p-6

rounded-3xl

shadow-sm

space-y-4

"
        >
          <img
            src={data.avatar}
            className="

w-20 h-20

rounded-full

object-cover

shadow

"
          />

          <input
            type="file"
            onChange={(e) => {
              const file = e.target.files[0];

              const reader = new FileReader();

              reader.onloadend = () => {
                update(
                  "avatar",

                  reader.result,
                );
              };

              if (file) {
                reader.readAsDataURL(file);
              }
            }}
            className="cursor-pointer"
          />

          <input
            value={data.name}
            onChange={(e) =>
              update(
                "name",

                e.target.value,
              )
            }
            placeholder="Name"
            className="

w-full

bg-gray-50

px-4 py-2.5

rounded-xl

"
          />

          <input
            value={data.username}
            onChange={(e) =>
              update(
                "username",

                e.target.value,
              )
            }
            placeholder="Username"
            className="

w-full

bg-gray-50

px-4 py-2.5

rounded-xl

"
          />

          <textarea
            value={data.bio}
            onChange={(e) =>
              update(
                "bio",

                e.target.value,
              )
            }
            placeholder="Bio"
            className="

w-full

bg-gray-50

px-4 py-2.5

rounded-xl

"
          />
        </div>

        {/* themes */}

        <div
          className="

bg-white

p-6

rounded-3xl

shadow-sm

"
        >
          <p
            className="

text-sm

text-gray-400

mb-3

"
          >
            Themes
          </p>

          <div
            className="

grid grid-cols-6 gap-3

"
          >
            {Object.entries(themes)

              .map(([key, t]) => (
                <button
                  key={key}
                  onClick={() =>
                    update(
                      "theme",

                      key,
                    )
                  }
                  className={`

w-10 h-10

rounded-xl

bg-gradient-to-br

${t.gradient}

${data.theme === key ? "ring-2 ring-offset-2" : ""}

`}
                />
              ))}
          </div>
        </div>

        {/* button style */}

        <div
          className="

bg-white

p-6

rounded-3xl

shadow-sm

"
        >
          <p
            className="

text-sm

text-gray-400

mb-3

"
          >
            Button style
          </p>

          <div className="flex gap-2">
            {["solid", "soft", "outline"].map((style) => (
              <button
                key={style}
                onClick={() =>
                  update(
                    "buttonStyle",

                    style,
                  )
                }
                className={`

px-4 py-2

rounded-xl

text-sm

transition

${
  data.buttonStyle === style
    ? "bg-gray-900 text-white"
    : "bg-gray-100 text-gray-500"
}

`}
              >
                {style}
              </button>
            ))}
          </div>
        </div>

        {/* socials */}

        <div
          className="

bg-white

p-6

rounded-3xl

shadow-sm

space-y-3

"
        >
          <p
            className="

text-sm

text-gray-400

"
          >
            Social links
          </p>

          {Object.keys(data.socials)

            .map((key) => (
              <div
                key={key}
                className="

flex items-center gap-2

"
              >
                <span
                  className="

text-gray-400

"
                >
                  {key === "instagram" && <FaInstagram />}

                  {key === "youtube" && <FaYoutube />}

                  {key === "twitter" && <FaTwitter />}

                  {key === "website" && <FaGlobe />}
                </span>

                <input
                  value={data.socials[key]}
                  onChange={(e) =>
                    updateSocial(
                      key,

                      e.target.value,
                    )
                  }
                  placeholder={key}
                  className="

w-full

bg-gray-50

px-3 py-2

rounded-lg

"
                />
              </div>
            ))}
        </div>
      </div>

      {/* preview */}

      <div
        className="

flex justify-center

"
      >
        <div
          className="

relative

w-[330px]

h-[690px]

bg-black

rounded-[50px]

p-[10px]

shadow-2xl

"
        >
          <div
            className={`

w-full h-full

rounded-[40px]

overflow-hidden

${theme?.bg}

${theme?.text}

`}
          >
            <div
              className="

h-40

bg-gradient-to-br

${theme.gradient}

"
            />

            <img
              src={data.avatar}
              className="

w-24 h-24

rounded-full

mx-auto

-translate-y-12

shadow-lg

"
            />

            <div
              className="

text-center

-translate-y-8

px-6

"
            >
              <h3 className="font-semibold">{data.name || "Name"}</h3>

              <p
                className="

text-sm opacity-70

"
              >
                @{data.username || "username"}
              </p>

              <p
                className="

text-sm mt-2 opacity-80

"
              >
                {data.bio}
              </p>
            </div>

            <div
              className="

px-6

space-y-3

"
            >
              {links?.map((link) => (
                <div
                  key={link._id}
                  className={`

py-3

rounded-xl

text-center

font-medium

${theme[data.buttonStyle]}

`}
                >
                  {link.title}
                </div>
              ))}
            </div>

            <p
              className="

text-center

text-xs

opacity-40

mt-6

"
            >
              inToBio
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
