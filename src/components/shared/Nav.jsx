import { Link } from "react-router-dom";

const NavComponent = ({ navMenuClsName }) => (
  <nav
    role="navigation"
    id="w-node-_849c6709-de55-7e6d-ec2b-999791252559-91252555"
    className={navMenuClsName}
  >
    <Link to="/" className="nav-menu-link">
      Home
    </Link>
    <Link to="/about" className="nav-menu-link">
      About
    </Link>
    <Link
      to="/insurance"
      aria-current="page"
      className="nav-menu-link w--current"
    >
      Insurance 101
    </Link>
    <Link to="/contact" className="nav-menu-link">
      Contact
    </Link>
    <Link to="/book" className="nav-menu-link">
      Book
    </Link>
  </nav>
);

export default NavComponent;
