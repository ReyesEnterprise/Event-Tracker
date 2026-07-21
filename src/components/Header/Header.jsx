import Logo from "../../assets/Event_logo-thin.png";
import NavBar from "../Navbar/NavBar";

import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header__container">
        <div className="header_logo_container">
          <img className="header_logo" src={Logo} alt="" />
          <p className="header_logo-text">
            <span className="header_logo__event">Event</span>{" "}
            <span className="header_logo__tracker">Tracker</span>
          </p>
        </div>
        <NavBar />
      </div>
    </div>
  );
}

export default Header;
