import { Outlet } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";

const HomeLayout = () => {
  return (
    <div className="relative max-w-screen overflow-hidden">
      <Navbar />
      <div className="circle"></div>
      <div className="circle"></div>
      <Outlet />
    </div>
  );
};

export default HomeLayout;
