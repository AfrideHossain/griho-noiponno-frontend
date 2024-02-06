import "./navbar.css";
import { Link } from "react-router-dom";
import { HiOutlineShoppingCart, HiOutlineUserCircle } from "react-icons/hi";

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
  </>
);

const Navbar = () => {
  return (
    <>
      <div className="navbar glass relative z-10">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {Navitems}
            </ul>
          </div>
          {/* <div></div> */}
          <Link className="btn btn-ghost text-xl" to="/">
            Griho Noipunno
          </Link>
          {/* <div></div>
          <img src="/images/logo/logo.png" className="h-10 w-10" alt="" /> */}
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{Navitems}</ul>
        </div>
        <div className="navbar-end">
          <div className="flex-none">
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle"
              >
                <div className="indicator">
                  <HiOutlineShoppingCart className="w-6 h-6" />
                  <span className="badge badge-sm indicator-item">8</span>
                </div>
              </div>
              <div
                tabIndex={0}
                className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
              >
                <div className="card-body">
                  <span className="font-bold text-lg">8 Items</span>
                  <span className="text-info">Subtotal: $999</span>
                  <div className="card-actions">
                    <button className="btn btn-primary btn-block">
                      View cart
                    </button>
                  </div>
                </div>
              </div>
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
                <li>
                  <Link to={"/dashboard/"} className="justify-between">
                    Profile
                  </Link>
                </li>
                {/* <li>
                  <a>Settings</a>
                </li> */}
                <li>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
