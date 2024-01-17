import { Outlet } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";

const HomeLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default HomeLayout;
