import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import Home from "../pages/home/Home";

const Router = createBrowserRouter([
  {
    path:'/',
    Component:RootLayout,
    children:[
      {
        path:'',
        Component:Home
      }
    ]
  }
])

export default Router;