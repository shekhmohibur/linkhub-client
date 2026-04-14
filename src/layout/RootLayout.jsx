import { Outlet } from "react-router";
import Navbar from "../components/common/Navbar";


const RootLayout = () => {
    return (
        <div>
            {/* Navbar */}
            <header>
                <Navbar/>
            </header>
            {/* main contents */}
            <main>
                <Outlet/>
            </main>
            {/* footer */}
            <footer></footer>
        </div>
    );
};

export default RootLayout;