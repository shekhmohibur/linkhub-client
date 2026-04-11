import { NavLink } from "react-router";

import {
  IoMdLink,
  IoMdPerson,
  IoMdSettings
} from "react-icons/io";

import {
  MdInsertChartOutlined
} from "react-icons/md";


const BottomNav = () => {

  const links = [

    {
      name: "Links",
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
      fixed bottom-4 left-1/2 -translate-x-1/2
      w-[95%] max-w-md
      rounded-2xl
      bg-white/80 backdrop-blur-xl
      border border-white/40
      shadow-xl shadow-indigo-100
      px-2 py-2
      flex justify-between
      z-50
    ">

      {links.map(
        link => {

          const Icon =
            link.icon;

          return (

            <NavLink
              key={link.path}
              to={link.path}
              className={({isActive}) =>

                `
                  flex flex-col items-center
                  justify-center
                  flex-1
                  py-2
                  rounded-xl
                  text-xs
                  transition

                  ${isActive
                    ? "text-indigo-600 bg-indigo-50"
                    : "text-gray-400"
                  }
                `
              }
            >

              <Icon size={18} />

              {link.name}

            </NavLink>

          );

        }
      )}

    </div>

  );

};

export default BottomNav;