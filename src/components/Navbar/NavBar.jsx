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
      <NavLink to="/upcoming" className={customClassName()}>
        UpComing
      </NavLink>
      <NavLink to="/allevents" className={customClassName()}>
        ALL Events
      </NavLink>
      <NavLink to="/categories" className={customClassName()}>
        Calendar
      </NavLink>
      <NavLink to="/addevents" className={customClassName("addIconBtn")}>
        <img src={addIcon} alt="" />
        Add Events
      </NavLink>
    </nav>
  );
}

export default NavBar;
