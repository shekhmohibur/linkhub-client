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
import PublicRoute from "../routes/PublicRoute";
import PrivateRoute from "../routes/PrivateRoute";

const Router = createBrowserRouter([
  /* PUBLIC */

  {
    path: "/",

    Component: RootLayout,

    children: [
      {
        index: true,
        Component: Home,
      },

      {
        path: "login",

        element: (
          <PublicRoute>
            <Login />
          </PublicRoute>
        ),
      },

      {
        path: "register",

        element: (
          <PublicRoute>
            <Register />
          </PublicRoute>
        ),
      },

      {
        path: "terms",
        Component: Terms,
      },

      {
        path: "privacy",
        Component: Privacy,
      },
    ],
  },

  /* PRIVATE */

  {
    path: "/dashboard",

    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),

    children: [
      {
        path: "links",
        Component: MyLinks,
      },

      {
        path: "profile",
        Component: Profile,
      },

      {
        path: "analytics",
        Component: Analytics,
      },

      {
        path: "settings",
        Component: Settings,
      },

      {
        path: "help",
        Component: NeedHelp,
      },
    ],
  },

  /* PUBLIC PROFILE */

  {
    path: "/:username",

    Component: PublicProfile,
  },

  /* 404 */

  {
    path: "*",

    Component: NotFound,
  },
]);

export default Router;
