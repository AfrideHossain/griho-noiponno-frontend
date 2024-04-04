import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { HiOutlineShoppingCart, HiOutlineUserCircle } from "react-icons/hi";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContextProvider";

const Navitems = (
  <>
    <li>
      <Link to="/shop">Shop</Link>
    </li>
    <li>
      <Link to="/categories">Categories</Link>
    </li>
    <li>
      <Link to="/faq">FAQ</Link>
    </li>
    <li>
      <Link to="/whatsnew" className="link link-primary">
        What{"'"}s New
      </Link>
    </li>
  </>
);
const AdminRoutes = (
  <>
    <li>
      <Link to="/admin/addproduct">Add product</Link>
    </li>
  </>
);

const Navbar = () => {
  // destructure user from context
  const { user, userRole, logOutUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleSignout = () => {
    logOutUser().then(() => {
      navigate("/auth/signin");
    });
  };

  return (
    <>
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className="w-full navbar z-10 bg-base-300">
            <div className="navbar-start flex-grow">
              <div className="flex-none lg:hidden">
                <label
                  htmlFor="my-drawer-3"
                  aria-label="open sidebar"
                  className="btn btn-square btn-ghost"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block w-6 h-6 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                  </svg>
                </label>
              </div>
              <div className="flex-1 px-2 mx-2">
                <Link className="btn btn-ghost text-xl" to="/">
                  Griho Noipunno
                </Link>
              </div>
            </div>
            <div className="flex-none hidden lg:block">
              <ul className="menu menu-horizontal">
                {/* Navbar menu content here */}
                {Navitems}
                {userRole === "admin" && AdminRoutes}
              </ul>
            </div>
            <div className="navbar-end w-auto md:w-1/2">
              {!user ? (
                <>
                  <Link className="btn btn-primary" to={"auth/signin"}>
                    Sign in
                  </Link>
                </>
              ) : (
                <>
                  <div className="flex-none">
                    {/* <div>
                      <HiOutlineShoppingCart className="w-6 h-6" />
                    </div> */}
                    <div className="dropdown dropdown-end">
                      <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost btn-circle"
                      >
                        <div className="indicator">
                          <Link to={"dashboard/cart"}>
                            <HiOutlineShoppingCart className="w-6 h-6" />
                          </Link>
                          {/* <span className="badge badge-sm indicator-item">
                            8
                          </span> */}
                        </div>
                      </div>
                      {/* <div className="mt-3 z-[999] card card-compact dropdown-content w-52 bg-base-100 shadow">
                        <div className="card-body">
                          <span className="font-bold text-lg">8 Items</span>
                          <span className="text-info">Subtotal: $999</span>
                          <div className="card-actions">
                            <button className="btn btn-primary btn-block">
                              View cart
                            </button>
                          </div>
                        </div>
                      </div> */}
                    </div>
                    <div className="dropdown dropdown-end">
                      <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost btn-circle avatar"
                      >
                        <div className="w-10 rounded-full">
                          {/* <img
                    alt="Tailwind CSS Navbar component"
                    src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                  /> */}
                          <HiOutlineUserCircle className="w-full h-full" />
                        </div>
                      </div>
                      <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 z-[2] p-2 shadow bg-base-100 rounded-box w-52 text-white"
                      >
                        <li className="py-1">
                          <Link
                            to={"/dashboard/user"}
                            className="justify-between"
                          >
                            Profile
                          </Link>
                        </li>
                        {userRole === "admin" && (
                          <li className="py-1">
                            <Link to={"/admin"} className="justify-between">
                              Dashboard
                            </Link>
                          </li>
                        )}
                        {/* <li>
                  <a>Settings</a>
                </li> */}
                        <li className="py-1">
                          <button onClick={() => handleSignout()}>
                            Logout
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
        <div className="drawer-side z-50">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200">
            {/* Sidebar content here */}
            {Navitems}
            {userRole === "admin" && AdminRoutes}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
