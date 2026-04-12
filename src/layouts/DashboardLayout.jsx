import { useState, useRef, useEffect } from "react";
import { NavLink, Outlet } from "react-router";

import Sidebar from "../pages/dashboard/Sidebar";
import BottomNav from "../pages/dashboard/BottomNav";

import { FiHelpCircle, FiLogOut } from "react-icons/fi";

import useAuth from "../hooks/useAuth";

const DashboardLayout = () => {
  const { logout } = useAuth();

  /* avatar dropdown */
  const [open, setOpen] = useState(false);

  const dropdownRef = useRef(null);

  /* close dropdown when clicking outside */
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      className="

min-h-screen

bg-gray-50

"
    >
      <div
        className="

flex

min-h-screen

"
      >
        {/* DESKTOP SIDEBAR */}

        <aside
          className="

hidden lg:flex

w-65

border-r

bg-white

"
        >
          <div
            className="

w-full

sticky top-0

h-screen

p-5

overflow-y-auto

"
          >
            <Sidebar />
          </div>
        </aside>

        {/* MAIN AREA */}

        <div
          className="

flex-1

flex flex-col

min-h-screen

"
        >
          {/* MOBILE HEADER */}

          <header
            className="

lg:hidden

h-14

flex items-center justify-between

px-4

bg-white

border-b

sticky top-0

z-40

"
          >
            <h1
              className="

font-semibold

"
            >
              inToBio
            </h1>

            {/* avatar */}

            <div ref={dropdownRef} className="relative">
              <img
                src="https://i.pravatar.cc/40"
                onClick={() => setOpen(!open)}
                className="

w-9 h-9

rounded-full

cursor-pointer

"
              />

              {/* dropdown */}

              {open && (
                <div
                  className="

absolute right-0

mt-2

w-44

bg-white

rounded-xl

shadow-md

border

p-1

"
                >
                  <NavLink
                    className="

flex items-center gap-2

w-full

px-3 py-2

rounded-lg

text-sm

text-gray-600

hover:bg-gray-50

cursor-pointer

"
to={'/dashboard/help'}
                  >
                    <FiHelpCircle />
                    Help
                  </NavLink>

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

cursor-pointer

"
                  >
                    <FiLogOut />
                    Logout
                  </button>
                </div>
              )}
            </div>
          </header>

          {/* PAGE CONTENT */}

          <main
            className="

flex-1

p-4

lg:p-10

pb-24

lg:pb-10

max-w-7xl

w-full

mx-auto

"
          >
            <Outlet />
          </main>
        </div>
      </div>

      {/* MOBILE NAV */}

      <div
        className="

lg:hidden

fixed bottom-0

left-0 right-0

bg-white

border-t

z-40

"
      >
        <BottomNav />
      </div>
    </div>
  );
};

export default DashboardLayout;
