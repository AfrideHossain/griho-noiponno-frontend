import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layout/Home/HomeLayout";
import Home from "../Pages/Home/Home";
import Shop from "../Pages/Shop/Shop";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";
import ErrorElement from "../Shared/ErrorElement/ErrorElement";
import Whatsnew from "../temp/components/Whatsnew/Whatsnew";

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
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/product/",
        element: <ProductDetails />,
      },
      {
        path: "/error",
        element: <ErrorElement />,
      },
      {
        path: "/whatsnew",
        element: <Whatsnew />,
      },
    ],
  },
]);

export default router;
