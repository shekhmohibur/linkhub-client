import { Link } from "react-router";
import { useState, useRef, useEffect } from "react";

import { FiMenu, FiX, FiUser, FiSettings, FiLogOut } from "react-icons/fi";
import useAuth from "../../hooks/useAuth";

const Navbar = () => {
  const { user, logout } = useAuth();

  const [mobileOpen, setMobileOpen] = useState(false);

  const [userMenu, setUserMenu] = useState(false);

  const ref = useRef();

  /* close dropdown outside click */
  useEffect(() => {
    const handleClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setUserMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClick);

    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const items = [
    { label: "Features", id: "features" },

    { label: "Pricing", id: "pricing" },

    { label: "Showcase", id: "showcase" },
  ];

  const scrollToSection = (id) => {
    const el = document.getElementById(id);

    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
      });

      window.history.pushState(null, "", `#${id}`);
    }

    setMobileOpen(false);
  };

  return (
    <header
      className="

backdrop-blur-md

bg-linear-to-b

from-purple-100/80

via-white/70

to-transparent

"
    >
      <div
        className="

w-11/12

mx-auto

px-4 sm:px-6 lg:px-8

"
      >
        <nav
          className="

flex

items-center

justify-between

h-16

"
        >
          {/* logo */}

          <Link to="/" className="cursor-pointer">
            <h1
              className="

text-xl md:text-2xl

font-semibold

text-indigo-700

tracking-tight

"
            >
              inToBio
            </h1>
          </Link>

          {/* desktop nav */}

          <div
            className="

hidden md:flex

items-center gap-8

font-semibold

"
          >
            {items.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="

text-gray-700

hover:text-indigo-600

transition

cursor-pointer

"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* right area */}

          <div className="flex items-center gap-3">
            {/* guest */}

            {!user && (
              <>
                <Link
                  to="/login"
                  className="

hidden sm:block

text-gray-700

hover:text-indigo-600

font-semibold

px-4 py-2

rounded-lg

transition

cursor-pointer

"
                >
                  Sign in
                </Link>

                <Link
                  to="/register"
                  className="

bg-gradient-to-r

from-indigo-600

to-indigo-400

text-white

px-5 py-2.5

rounded-xl

shadow-md

hover:shadow-lg

transition

cursor-pointer

"
                >
                  Get started
                </Link>
              </>
            )}

            {/* user */}

            {user && (
              <div ref={ref} className="relative">
                <button
                  onClick={() => setUserMenu(!userMenu)}
                  className="

flex items-center gap-2

cursor-pointer

"
                >
                  <div
                    className="

w-9 h-9

rounded-full

bg-indigo-100

flex items-center justify-center

text-indigo-600

font-semibold

"
                  >
                    {user.name?.[0] || "U"}
                  </div>
                </button>

                {/* dropdown */}

                {userMenu && (
                  <div
                    className="

absolute

right-0

mt-2

w-48

bg-white

rounded-xl

shadow-lg

p-1

space-y-1

"
                  >
                    <Link
                      to="/dashboard/analytics"
                      className="

flex items-center gap-2

px-3 py-2

rounded-lg

hover:bg-gray-50

cursor-pointer

"
                    >
                      <FiUser />
                      Dashboard
                    </Link>

                    <Link
                      to="/dashboard/settings"
                      className="

flex items-center gap-2

px-3 py-2

rounded-lg

hover:bg-gray-50

cursor-pointer

"
                    >
                      <FiSettings />
                      Settings
                    </Link>

                    <button
                      onClick={logout}
                      className="

flex items-center gap-2

px-3 py-2

rounded-lg

text-red-500

hover:bg-red-50

cursor-pointer

w-full text-left

"
                    >
                      <FiLogOut />
                      Logout
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* mobile toggle */}

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="

md:hidden

cursor-pointer

"
            >
              {mobileOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </nav>

        {/* mobile menu */}

        {mobileOpen && (
          <div
            className="

md:hidden

pt-3

pb-4

space-y-2

"
          >
            {items.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="

block

w-full

text-left

px-4 py-2

text-gray-700

hover:bg-indigo-50

rounded-lg

cursor-pointer

"
              >
                {item.label}
              </button>
            ))}

            {!user && (
              <>
                <Link
                  to="/login"
                  className="

block

px-4 py-2

text-gray-700

hover:bg-indigo-50

rounded-lg

cursor-pointer

"
                  onClick={() => setMobileOpen(false)}
                >
                  Sign in
                </Link>

                <Link
                  to="/register"
                  className="

block

mx-4

mt-2

bg-indigo-600

text-white

px-4 py-2

rounded-lg

text-center

cursor-pointer

"
                  onClick={() => setMobileOpen(false)}
                >
                  Get started
                </Link>
              </>
            )}

            {user && (
              <>
                <Link
                  to="/dashboard/analytics"
                  className="

block

px-4 py-2

hover:bg-indigo-50

rounded-lg

cursor-pointer

"
                  onClick={() => setMobileOpen(false)}
                >
                  Dashboard
                </Link>

                <button
                  onClick={logout}
                  className="

block

w-full

text-left

px-4 py-2

text-red-500

hover:bg-red-50

rounded-lg

cursor-pointer

"
                >
                  Logout
                </button>
              </>
            )}
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
