import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layout/Home/HomeLayout";
import Home from "../Pages/Home/Home";
import Shop from "../Pages/Shop/Shop";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";
import ErrorElement from "../Shared/ErrorElement/ErrorElement";
import Whatsnew from "../temp/components/Whatsnew/Whatsnew";
import AuthLayout from "../Layout/Auth/AuthLayout";
import Login from "../Pages/Auth/Login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <ErrorElement />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "product",
        element: <ProductDetails />,
      },
      {
        path: "error",
        element: <ErrorElement />,
      },
      {
        path: "whatsnew",
        element: <Whatsnew />,
      },
    ],
  },
  {
    path: "auth",
    element: <AuthLayout />,
    errorElement: <ErrorElement />,
    children: [
      {
        path: "",
        element: <ErrorElement />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
]);

export default router;
