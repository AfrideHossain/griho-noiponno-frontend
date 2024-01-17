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
    <div className="navbar">
      <div className="siteName">
        <h1>Griho Noiponno</h1>
      </div>
      <div className="navLinks">
        <ul>{Navitems}</ul>
      </div>
      <div className="profile-section">
        <Link to="/">
          <HiOutlineShoppingCart className="nav-icon" />
        </Link>
        <Link to="/">
          <HiOutlineUserCircle className="nav-icon" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
