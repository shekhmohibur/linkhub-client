import { Outlet } from "react-router";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

const RootLayout = () => {
  return (
    <div>
      {/* header section */}
      <header className="sticky  z-10 top-0">
        <Navbar />
      </header>
      {/* main section */}
      <main>
        <Outlet />
      </main>
      {/* footer section */}
      <footer>
        <Footer/>
      </footer>
    </div>
  );
};

export default RootLayout;
