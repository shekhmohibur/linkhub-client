import {
  FiGlobe,
  FiCopy,
  FiCheck,
  FiBell,
  FiKey,
  FiTrash2,
} from "react-icons/fi";

import Swal from "sweetalert2";

import Toggle from "../../../components/shared/Toggle";

import SectionCard from "../../../components/shared/SectionCard";

import PasswordModal from "../../../components/shared/PasswordModal";

import { useSettings } from "../../../hooks/useSettings";

import { useState } from "react";

import { useUser } from "../../../hooks/useUser";

const Settings = () => {
  const { settings, update, loading } = useSettings();

  const { user } = useUser();

  const { changePassword, resetPassword } = PasswordModal();

  const [copied, setCopied] = useState(false);

  /* copy profile url */

  const copyLink = () => {
    navigator.clipboard.writeText(
      `${window.location.origin}/${settings.username}`,
    );

    setCopied(true);

    setTimeout(
      () => setCopied(false),

      1500,
    );
  };

  /* delete account */

  const deleteAccount = () => {
    Swal.fire({
      title: "Delete account?",

      text: "This action cannot be undone",

      icon: "warning",

      showCancelButton: true,

      confirmButtonColor: "#ef4444",

      confirmButtonText: "Delete",
    })

      .then((result) => {
        if (result.isConfirmed) {
          console.log("delete account api");
        }
      });
  };

  if (loading) {
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

  return (
    <div
      className="

max-w-5xl

mx-auto

px-4

py-10

space-y-10

"
    >
      <div>
        <h1
          className="

text-2xl

font-semibold

"
        >
          Settings
        </h1>

        <p className="text-gray-500">Manage your preferences</p>
      </div>

      <SectionCard title="Profile link">
        <div
          className="

md:items-center gap-2

flex flex-col sm:flex-row

"
        >
          <span className="text-gray-400">intobio.com/</span>

          <input
            value={settings.username}
            onChange={(e) =>
              update(
                "username",

                e.target.value,
              )
            }
            placeholder="username"
            className="

flex-1

bg-gray-50

px-3 py-2

rounded-lg

outline-none

"
          />

          <button
            onClick={copyLink}
            className="

px-3 py-2

bg-gray-100

rounded-lg

hover:bg-gray-200

cursor-pointer

flex items-center gap-2

"
          >
            {copied ? <FiCheck /> : <FiCopy />}
          </button>
        </div>
      </SectionCard>

      <SectionCard
        title="Custom domain"
        right={
          <span
            className="

text-xs

bg-black

text-white

px-2 py-1

rounded

"
          >
            PRO
          </span>
        }
      >
        <div className="relative">
          <div
            className="

flex items-center gap-2

opacity-60

"
          >
            <FiGlobe />

            <input
              disabled
              placeholder="yourdomain.com"
              className="

flex-1

bg-gray-100

px-3 py-2

rounded-lg

"
            />
          </div>

          <div
            className="

absolute inset-0

bg-white/70

backdrop-blur

flex items-center justify-center

"
          >
            <button
              className="

bg-black text-white

px-3 py-1.5

rounded-lg

text-sm

cursor-pointer

"
            >
              Not available now
            </button>
          </div>
        </div>
      </SectionCard>

      <SectionCard title="Visibility">
        <div
          className="

flex items-center justify-between

"
        >
          <div>
            <p>Public profile</p>

            <p
              className="

text-sm

text-gray-400

"
            >
              Anyone can see page
            </p>
          </div>

          <Toggle
            value={settings.isPublic}
            onChange={(v) =>
              update(
                "isPublic",

                v,
              )
            }
          />
        </div>

        <div
          className="

flex items-center justify-between

"
        >
          <div>
            <p>Search indexing</p>

            <p
              className="

text-sm

text-gray-400

"
            >
              Google visibility
            </p>
          </div>

          <Toggle
            value={settings.allowIndexing}
            onChange={(v) =>
              update(
                "allowIndexing",

                v,
              )
            }
          />
        </div>
      </SectionCard>

      <SectionCard title="Notifications">
        <div
          className="

flex items-center justify-between

"
        >
          <div
            className="

flex items-center gap-2

"
          >
            <FiBell />
            Email alerts
          </div>

          <Toggle
            value={settings.emailNotifications}
            onChange={(v) =>
              update(
                "emailNotifications",

                v,
              )
            }
          />
        </div>
      </SectionCard>

      <SectionCard title="Security">
        <button
          onClick={changePassword}
          className="

w-full

text-left

px-3 py-2

hover:bg-gray-50

rounded-lg

cursor-pointer

"
        >
          Change password
        </button>

        <button
          onClick={resetPassword}
          className="

w-full

text-left

px-3 py-2

hover:bg-gray-50

rounded-lg

cursor-pointer

"
        >
          Reset password via email
        </button>

        <div
          className="

flex items-center justify-between

"
        >
          <div
            className="

flex items-center gap-2

"
          >
            <FiKey />
            Two factor auth
          </div>

          <Toggle
            value={settings.twoFactor}
            onChange={(v) =>
              update(
                "twoFactor",

                v,
              )
            }
          />
        </div>
      </SectionCard>

      <SectionCard title="Danger zone">
        <button
          onClick={deleteAccount}
          className="

text-red-600

flex items-center gap-2

cursor-pointer

"
        >
          <FiTrash2 />
          Delete account
        </button>
      </SectionCard>
    </div>
  );
};

export default Settings;
