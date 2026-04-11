import { useState, useRef, useEffect } from "react";
import { Outlet } from "react-router";

import Sidebar from "../pages/dashboard/Sidebar";
import BottomNav from "../pages/dashboard/BottomNav";

import { FiHelpCircle, FiLogOut } from "react-icons/fi";
import { useAuth } from "../contexts/AuthContext";

const DashboardLayout = () => {
  const { logout } = useAuth();
  const [open, setOpen] = useState(false);

  const ref = useRef();

  // close dropdown on outside click
  useEffect(() => {
    const handleClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("click", handleClick);

    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <div
      className="
      min-h-screen
      bg-gradient-to-br
      from-[#f8fafc]
      via-[#eef2ff]
      to-[#f1f5f9]
    "
    >
      <div className="flex">
        {/* DESKTOP SIDEBAR */}
        <aside
          className="
          hidden lg:flex
          w-[260px]
          p-4
        "
        >
          <div
            className="
            w-full
            rounded-2xl
            bg-white/70
            backdrop-blur-xl
            border
            shadow-lg
            p-4
            sticky top-4
            h-[calc(100vh-32px)]
          "
          >
            <Sidebar />
          </div>
        </aside>

        {/* MAIN */}
        <div className="flex-1">
          {/* MOBILE HEADER */}
          <header
            className="
            lg:hidden
            h-16
            flex items-center justify-between
            px-4
            bg-white/70
            backdrop-blur-xl
            border-b
            sticky top-0
            z-40
          "
          >
            <h1
              className="
              font-semibold
              tracking-tight
            "
            >
              inToBio
            </h1>

            {/* avatar dropdown */}
            <div ref={ref} className="relative">
              <img
                src="https://i.pravatar.cc/40"
                onClick={() => setOpen(!open)}
                className="
                  w-9 h-9
                  rounded-full
                  cursor-pointer
                  ring-2 ring-white
                "
              />

              {/* dropdown */}
              {open && (
                <div
                  className="
                  absolute right-0 mt-2
                  w-44
                  rounded-xl

                  bg-white/90
                  backdrop-blur-xl

                  border
                  shadow-lg

                  p-1
                "
                >
                  <button
                    className="
                    flex items-center gap-2
                    w-full

                    px-3 py-2
                    rounded-lg

                    text-sm
                    text-gray-600

                    hover:bg-gray-100
                  "
                  >
                    <FiHelpCircle />
                    Help
                  </button>

                  <button
                    onClick={logout}
                    className="
                    flex items-center gap-2
                    w-full

                    px-3 py-2
                    rounded-lg

                    text-sm
                    text-red-500

                    hover:bg-red-50
                  "
                  >
                    <FiLogOut />
                    Logout
                  </button>
                </div>
              )}
            </div>
          </header>

          {/* PAGE */}
          <main
            className="
            p-4
            lg:p-10

            pb-28 lg:pb-10

            max-w-7xl
            mx-auto
          "
          >
            <Outlet />
          </main>
        </div>
      </div>

      {/* MOBILE NAV */}
      <div className="lg:hidden">
        <BottomNav />
      </div>
    </div>
  );
};

export default DashboardLayout;
