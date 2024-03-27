import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layout/Home/HomeLayout";
import Home from "../Pages/Home/Home";
import Shop from "../Pages/Shop/Shop";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";
import ErrorElement from "../Shared/ErrorElement/ErrorElement";
import Whatsnew from "../temp/components/Whatsnew/Whatsnew";
import AuthLayout from "../Layout/Auth/AuthLayout";
import Login from "../Pages/Auth/Login/Login";
import SignUp from "../Pages/Auth/SignUp/SignUp";
import DashboardLayout from "../Layout/Dashboadrd/DashboardLayout";
import User from "../Pages/User/User";
import Admin from "../Pages/Admin/Admin";
import AddProduct from "../Pages/Admin/AddProduct/AddProduct";
import Cart from "../Pages/User/Cart/Cart";
import SecureAdminRoute from "../secureRoutes/SecureAdminRoute";
import EditUser from "../Pages/User/EditUser/EditUser";

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
        path: "signin",
        element: <Login />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
    ],
  },
  {
    path: "dashboard",
    element: <DashboardLayout />,
    errorElement: <ErrorElement />,
    children: [
      {
        path: "",
        element: <ErrorElement />,
      },
      {
        path: "user",
        element: <User />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "editprofile",
        element: <EditUser />,
      },
    ],
  },
  {
    path: "admin",
    element: <DashboardLayout />,
    errorElement: <ErrorElement />,
    children: [
      {
        path: "",
        element: (
          <SecureAdminRoute>
            <Admin />
          </SecureAdminRoute>
        ),
      },
      {
        path: "addproduct",
        element: (
          <SecureAdminRoute>
            <AddProduct />
          </SecureAdminRoute>
        ),
      },
    ],
  },
]);

export default router;
