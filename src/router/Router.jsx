import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/home/Home";
import DashboardLayout from "../layouts/DashboardLayout";


const Router = createBrowserRouter([
    {
        path: "/",
        Component:RootLayout,
        children:[
            {index:true, path: '/', Component:Home},
        ]
    },
    {
        path:'/dashboard',
        Component:DashboardLayout,
    }
])

export default Router;