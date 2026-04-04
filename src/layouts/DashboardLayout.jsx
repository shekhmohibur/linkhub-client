import { Outlet } from "react-router";
import Sidebar from "../pages/dashboard/Sidebar";

const DashboardLayout = () => {
    return (
        <div>
            {/* sidebar */}
            <aside>
                <Sidebar />
            </aside>
            {/* main content */}
            <main>
                <Outlet />
            </main>
        </div>
    );
};

export default DashboardLayout;