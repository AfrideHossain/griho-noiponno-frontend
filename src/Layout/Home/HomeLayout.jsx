import { Outlet } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";
import Footer from "../../Shared/Footer/Footer";

// importing AOS and related
import AOS from "aos";
import "aos/dist/aos.css";

// Initiate Aos
AOS.init();

const HomeLayout = () => {
  return (
    <div className="relative max-w-screen">
      <Navbar />
      {/* <div className="circle"></div>
      <div className="circle"></div> */}
      <Outlet />
      <Footer />
    </div>
  );
};

export default HomeLayout;
