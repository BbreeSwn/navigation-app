import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaHome } from "react-icons/fa";
// import { FaWindowClose } from "react-icons/fa";

const Navigation = () => {
  return (
    <aside>
      <div className="navbar">
        <div className="navbar-toggle">
          <Link to="#" className="menu-bar">
            <GiHamburgerMenu/>
          </Link>
        </div>
      </div>
      <nav className="nav-menu">
<ul className="nav-menu-item">
    <li className="menu-text"><Link to='#'><FaHome/><span>Home</span></Link></li>
    <li className="menu-text">Home</li>
    <li className="menu-text">Home</li>
</ul>
      </nav>
    </aside>
  );
};

export default Navigation;
