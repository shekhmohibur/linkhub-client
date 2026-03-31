import { Link, NavLink } from "react-router";

const Navbar = () => {
  const items = [
    { label: "Features", path: "/features" },
    { label: "Pricing", path: "/pricing" },
    { label: "Showcase", path: "/showcase" },
  ];

  return (
    <header
      className="
        backdrop-blur-md
        border-b border-indigo-100/40
        bg-linear-to-b
        from-purple-100/80
        via-white/70
        to-transparent
      "
    >
      <div className="w-11/12 mx-auto px-4 sm:px-6 lg:px-8">

        <nav className="flex items-center justify-between h-16">

          {/* logo */}
          <Link to="/">
            <h1 className="
              font-inter
              text-xl md:text-2xl
              font-semibold
              text-indigo-700
              tracking-tight
            ">
              inToBio
            </h1>
          </Link>


          {/* nav links */}
          <div className="hidden md:flex items-center gap-8 font-manrope font-semibold">

            {items.map((item, idx) => (
              <NavLink
                key={idx}
                to={item.path}
                className={({ isActive }) =>
                  `
                  relative
                  text-gray-700
                  hover:text-indigo-600
                  transition-colors
                  duration-300

                  after:content-['']
                  after:absolute
                  after:left-0
                  after:-bottom-1
                  after:h-[2px]
                  after:w-full
                  after:bg-indigo-600
                  after:origin-left
                  after:transition-transform
                  after:duration-300

                  ${isActive ? "after:scale-x-100 text-indigo-600" : "after:scale-x-0"}
                  `
                }
              >
                {item.label}
              </NavLink>
            ))}

          </div>


          {/* buttons */}
          <div className="flex items-center gap-3">

            <button
              className="
                hidden sm:block
                text-gray-700
                hover:text-indigo-600
                font-medium
                transition
                cursor-pointer
              "
            >
              Log in
            </button>


            <button
              className="
                bg-linear-to-r
                from-indigo-600
                to-indigo-400
                hover:from-indigo-700
                hover:to-indigo-500
                text-white
                font-semibold
                px-5
                py-2.5
                rounded-xl
                shadow-md
                hover:shadow-lg
                transition-all
                duration-300
                cursor-pointer
              "
            >
              Get Started
            </button>

          </div>

        </nav>

      </div>
    </header>
  );
};

export default Navbar;