import { Link, NavLink } from "react-router";

const Navbar = () => {
  const items = [
    { label: "Features", path: "/features" },
    { label: "Pricing", path: "/pricing" },
    { label: "Showcase", path: "/showcase" },
  ];
  return (
    <div className=" bg-gray-300">
      <div className="w-11/12 mx-auto flex justify-between py-4 items-center">
        {/* logo */}
        <div>
          <Link to={'/'}>
            <h1 className="font-inter text-2xl font-semibold text-indigo-700 tracking-tight">
              inToBio
            </h1>
          </Link>
        </div>
        {/* Navigation links */}
        <div className="md:flex gap-6 font-manrope font-semibold hidden">
          {items?.map((item, idx) => (
            <NavLink
              key={idx}
              to={item?.path}
              className="
        relative 
        text-on-surface
        transition-colors duration-300
        hover:text-primary

        after:content-['']
        after:absolute
        after:left-0
        after:-bottom-1
        after:h-0.5
        after:w-full
        after:bg-primary

        after:scale-x-0
        after:origin-left
        after:transition-transform
        after:duration-300

        hover:after:scale-x-100
      "
            >
              {item?.label}
            </NavLink>
          ))}
        </div>
        {/* auth related buttons */}
        <div>
          <button className="btn bg-transparent outline-none border-none shadow-none text-gray-700 text-lg">
            Log In
          </button>
          <button className="btn bg-indigo-700/86 text-white rounded-xl text-lg py-5">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
