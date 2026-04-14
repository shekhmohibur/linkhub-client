import { Link, NavLink } from "react-router";

const nav_links = [
  { id: 1, path: "/platform", label: "Platform" },
  { id: 2, path: "/templates", label: "Templates" },
  { id: 3, path: "/pricing", label: "Pricing" },
  { id: 4, path: "/resources", label: "Resources" },
];

const Navbar = () => {
  return (
    <div className="flex justify-between max-w-6xl py-3 mx-auto items-center px-4 md:px-0">
      {/* logo */}
      <div>
        <Link to="/">
          <h1 className="text-primary font-bold font-headline text-2xl animate-logo-slide">
            inToBio
          </h1>
        </Link>
      </div>

      {/* nav links */}
      <div className="hidden md:flex gap-5 lg:gap-7">
        {nav_links.map((item) => (
          <NavLink
            key={item.id}
            to={item.path}
            className={({ isActive }) =>
              `
              font-semibold
              transition-all duration-200

              hover:text-primary
              hover:scale-[1.05]

              ${isActive ? "text-primary" : "text-on-surface"}
              `
            }
          >
            {item.label}
          </NavLink>
        ))}
      </div>
      {/* auth buttons */}
      <div className="flex items-center gap-3">
        {/* login */}
        <Link
          to="/login"
          className="px-5 py-2 text-sm font-semibold text-slate-600 transition-all duration-200 hover:text-primary hover:scale-[1.05]"
        >
          Login
        </Link>

        {/* signup */}
        <Link
          to="/signup"
          className="editorial-gradient rounded-sm px-5 py-2 text-sm font-bold text-white shadow-lg shadow-primary/20 transition-all duration-200 hover:shadow-xl hover:shadow-primary/30 hover:scale-[1.02]"
        >
          Signup
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
