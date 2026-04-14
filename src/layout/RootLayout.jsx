import { useEffect, useState } from "react";
import { Outlet, NavLink } from "react-router";
import Navbar from "../components/layout/Navbar/Navbar";
import Footer from "../pages/home/Footer";

const RootLayout = () => {
  const nav_links = [
    { id: 1, path: "/platform", label: "Platform" },
    { id: 2, path: "/templates", label: "Templates" },
    { id: 3, path: "/pricing", label: "Pricing" },
    { id: 4, path: "/resources", label: "Resources" },
  ];

  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen">
      {/* dynamic sticky navbar */}
      <header
        className={`
          fixed top-0 left-0 w-full z-50

          transition-all duration-300

          ${
            isSticky
              ? "bg-white/80 backdrop-blur-md shadow-md border-b border-surface-container-high"
              : "bg-transparent"
          }
        `}
      >
        <Navbar />
      </header>

      {/* page content */}
      <main className="pt-20">
        <Outlet />
      </main>

      {/* floating mobile menu */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-6 px-6 py-3 bg-white/80 backdrop-blur-md rounded-full shadow-lg border border-surface-container-high z-50 md:hidden animate-mobileMenu">
        {nav_links.map((item) => (
          <NavLink
            key={item.id}
            to={item.path}
            className={({ isActive }) =>
              `font-semibold text-sm transition-all duration-200 hover:text-primary hover:scale-110 ${isActive ? "text-primary" : "text-on-surface"}`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </div>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default RootLayout;
