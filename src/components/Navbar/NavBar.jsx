import { NavLink } from "react-router-dom";
import addIcon from "../../assets/AddIcon.svg";
import "./NavBar.css";

function NavBar() {
  const customClassName =
    (extraClass = "") =>
    ({ isActive }) => {
      const activeClass = isActive ? " menu__link_active" : "";
      const extraClassName = extraClass ? ` ${extraClass}` : "";

      return `menu__link${activeClass}${extraClassName}`;
    };

  return (
    <nav className="menu">
      <NavLink to="/" className={customClassName()}>
        Home
      </NavLink>
      <NavLink to="/Events" className={customClassName()}>
        Events
      </NavLink>
      <NavLink to="/Calendar" className={customClassName()}>
        Calendar
      </NavLink>
      <NavLink to="/addevents" className={customClassName("addIconBtn")}>
        Sign in
      </NavLink>
    </nav>
  );
}

export default NavBar;
