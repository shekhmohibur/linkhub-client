import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/home/Home";


const Router = createBrowserRouter([
    {
        path: "/",
        Component:RootLayout,
        children:[
            {index:true, path: '/', Component:Home},
        ]
    }
])

export default Router;