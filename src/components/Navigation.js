import { Link } from "react-router-dom";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaHome, FaWindowClose, FaUser,FaShoppingCart } from "react-icons/fa";
import "./Navigation.css";

const Navigation = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => setShowMenu(!showMenu);
  return (
    <aside>
      <div className="navbar">
        <div className="navbar-toggle">
          <Link to="#" className="menu-bar">
            <GiHamburgerMenu onClick={toggleMenu} />
          </Link>
        </div>
      </div>
      <nav className={showMenu ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-item">
          <div className="navbar-toggle">
            <Link to="#" className="menu-bar">
              <FaWindowClose onClick={toggleMenu} />
            </Link>
          </div>
          <li className="menu-text">
            <Link to="#">
              <FaHome />
              <span>Home</span>
            </Link>
          </li>
          <li className="menu-text">
            <Link to="#">
              <FaUser />
              <span>User</span>
            </Link>
          </li>
          <li className="menu-text">
            <Link to="#">
              <FaShoppingCart />
              <span>Cart</span>
            </Link>
          </li>

        </ul>
      </nav>
    </aside>
  );
};

export default Navigation;
