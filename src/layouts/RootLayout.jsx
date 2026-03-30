import { Outlet } from "react-router";
import Navbar from "../components/common/Navbar";

const RootLayout = () => {
  return (
    <div>
      {/* header section */}
      <header>
        <Navbar />
      </header>
      {/* main section */}
      <main>
        <Outlet />
      </main>
      {/* footer section */}
      <footer></footer>
    </div>
  );
};

export default RootLayout;
