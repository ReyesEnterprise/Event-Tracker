import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  const customClassName = ({ isActive }) => {
    return "menu__link" + (isActive ? " menu__link_active" : "");
  };

  return (
    <nav className="menu">
      <NavLink to="/" className={customClassName}>
        Home
      </NavLink>
      <NavLink to="/upcoming" className={customClassName}>
        UpComing
      </NavLink>
      <NavLink to="/allevents" className={customClassName}>
        ALL Events
      </NavLink>
      <NavLink to="/categories" className={customClassName}>
        Categories
      </NavLink>
      <NavLink to="/addevents" className={customClassName}>
        Add Events
      </NavLink>
    </nav>
  );
}

export default NavBar;
