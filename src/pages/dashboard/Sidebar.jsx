import { Link, NavLink } from "react-router";

import {
  IoMdLink,
  IoMdPerson,
  IoMdSettings
} from "react-icons/io";

import {
  MdInsertChartOutlined
} from "react-icons/md";

import {
  FiHelpCircle,
  FiLogOut
} from "react-icons/fi";


const Sidebar = () => {

  const links = [

    {
      name: "My Links",
      path: "/dashboard/links",
      icon: IoMdLink
    },

    {
      name: "Profile",
      path: "/dashboard/profile",
      icon: IoMdPerson
    },

    {
      name: "Analytics",
      path: "/dashboard/analytics",
      icon: MdInsertChartOutlined
    },

    {
      name: "Settings",
      path: "/dashboard/settings",
      icon: IoMdSettings
    }

  ];


  return (

    <div className="
      flex flex-col
      justify-between
      h-full
    ">

      {/* LOGO */}
      <div>

        <h2 className="
          text-xl
          font-semibold
          tracking-tight
          mb-8
          px-2
        ">

          <Link to="/">inToBio</Link>

        </h2>



        {/* NAV */}
        <nav className="space-y-1">

          {links.map(link => {

            const Icon =
              link.icon;

            return (

              <NavLink
                key={link.path}
                to={link.path}

                className={({isActive}) =>

                  `
                    flex items-center gap-3
                    px-3 py-2.5
                    rounded-xl

                    text-sm

                    transition

                    ${isActive
                      ? "bg-indigo-50 text-indigo-600"
                      : "text-gray-500 hover:bg-gray-100"
                    }
                  `
                }
              >

                <Icon size={18} />

                {link.name}

              </NavLink>

            );

          })}

        </nav>

      </div>



      {/* FOOTER */}
      <div className="space-y-1">

        <NavLink
          to={'/dashboard/help'}
          className="
            flex items-center gap-3
            w-full

          px-3 py-2.5
          rounded-xl

          text-sm
          text-gray-500

          hover:bg-gray-100
        ">

          <FiHelpCircle />

          Help

        </NavLink>



        <button className="
          flex items-center gap-3
          w-full

          px-3 py-2.5
          rounded-xl

          text-sm
          text-red-500

          hover:bg-red-50
        ">

          <FiLogOut />

          Log out

        </button>

      </div>

    </div>

  );

};

export default Sidebar;