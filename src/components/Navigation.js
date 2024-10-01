import { Link } from "react-router-dom";
import{useState} from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { FaHome } from "react-icons/fa";
// import { FaWindowClose } from "react-icons/fa";

const Navigation = () => {
    const [showMenu,setShowMenu] = useState(false)
    const toggleMenu = () => setShowMenu(!showMenu)
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
          <li className="menu-text">
            <Link to="#">
              <FaHome />
              <span>Home</span>
            </Link>
          </li>
          <li className="menu-text">Home</li>
          <li className="menu-text">Home</li>
        </ul>
      </nav>
    </aside>
  );
};

export default Navigation;
