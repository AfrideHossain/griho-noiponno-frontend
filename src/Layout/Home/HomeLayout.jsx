import { Outlet } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";
import Footer from "../../Shared/Footer/Footer";

// importing AOS and related
import AOS from "aos";
import "aos/dist/aos.css";
import Swal from "sweetalert2";
import { useState } from "react";

//icon
import { BsRocket } from "react-icons/bs";
import { FaGears } from "react-icons/fa6";
import { HiOutlineSparkles } from "react-icons/hi2";

// Initiate Aos
AOS.init();

const HomeLayout = () => {
  // set warning state
  const [showWarning, setShowWarning] = useState(false);

  setTimeout(() => {
    setShowWarning(false);
  }, 1000 * 8);
  return (
    <div className="relative max-w-screen">
      <Navbar />
      {/* <div className="circle"></div>
      <div className="circle"></div> */}
      {showWarning && (
        <div className="absolute z-[999] top-0 left-0 w-full h-screen bg-black/50 backdrop-blur-md flex flex-col justify-center items-center">
          <div className="max-w-2xl flex flex-col items-center justify-center bg-slate-700 bg-opacity-80 py-8 px-4 rounded-md">
            <HiOutlineSparkles className="w-20 h-20" />
            {/* write a warning message about we are new feature coming */}
            <h1 className="mt-4 text-3xl font-semibold">Shiny and New!</h1>
            <p className="text-lg text-center mt-4">
              We{"'"}re busy polishing a few features to make them even better.
              Enjoy the rest of the site while we work our magic!
            </p>
          </div>
        </div>
      )}
      <Outlet />
      <Footer />
    </div>
  );
};

export default HomeLayout;
