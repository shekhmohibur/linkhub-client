import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/home/Home";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import PublicProfile from "../pages/PublicProfile";
import NotFound from "../pages/NotFound";
import DashboardLayout from "../layouts/DashboardLayout";
import MyLinks from "../pages/dashboard/pages/MyLinks";
import Settings from "../pages/dashboard/pages/Settings";
import Analytics from "../pages/dashboard/pages/Analytics";
import Profile from "../pages/dashboard/pages/Profile";
import NeedHelp from "../pages/dashboard/pages/NeedHelp";
import Terms from "../components/common/Terms";
import Privacy from "../components/common/Privacy";

const Router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, path: "/", Component: Home },
      { path: "/login", Component: Login },
      { path: "/register", Component: Register },
      { path: "/terms", Component: Terms },
      { path: "/privacy", Component: Privacy },
    ],
  },
  {
    path: "/dashboard",
    Component: DashboardLayout,
    children: [
      { path: "links", Component: MyLinks },
      { path: "profile", Component: Profile },
      { path: "analytics", Component: Analytics },
      { path: "settings", Component: Settings },
      { path: "help", Component: NeedHelp },
    ],
  },
  {
    path: "/:username",
    Component: PublicProfile,
  },
  {
    path: "*",
    Component: NotFound,
  },
]);

export default Router;
