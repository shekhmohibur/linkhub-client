import { IoMdLink, IoMdPerson, IoMdSettings } from "react-icons/io";
import { MdInsertChartOutlined } from "react-icons/md";
import { Link, NavLink } from "react-router";
const Sidebar = () => {
  const sideLinks = [
    {
      name: "Links",
      path: "/dashboard/links",
      icon: IoMdLink,
    },
    {
      name: "Profile",
      path: "/dashboard/profile",
      icon: IoMdPerson,
    },
    {
      name: "Analytics",
      path: "/dashboard/analytics",
      icon: MdInsertChartOutlined,
    },
    {
      name: "Settings",
      path: "/dashboard/settings",
      icon: IoMdSettings,
    },
  ];
  return (
    <div>
      <div className="w-60 bg-purple-200/30 min-h-screen">
        {/* logo here */}
        <div className="flex justify-center items-center h-20 border-b-2 border-purple-500/30">
          <Link to="/">
            <h1
              className="
              font-inter
              text-xl md:text-2xl
              font-semibold
              text-indigo-700
              tracking-tight
            "
            >
              inToBio
            </h1>
          </Link>
        </div>
        {/* sidebar links are here */}
        <div className="flex flex-col">
          {sideLinks?.map((link, idx) => {
            const Icon = link.icon;
            return (
              <NavLink key={idx} className={'flex gap-3'}>
                <Icon size={23}/>
                {link.name}
              </NavLink>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
