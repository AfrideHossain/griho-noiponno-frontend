import { Outlet } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";
import Footer from "../../Shared/Footer/Footer";
import useSocket from "../../hooks/Socket/useSocket";

const DashboardLayout = () => {
  const socket = useSocket()
  return (
    <div className="relative max-w-7xl mx-auto">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default DashboardLayout;
