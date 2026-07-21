import "./Dashboard.css";

import logo from "../../assets/Event_logo-thin.png";
import calenderIcon from "../../assets/icon_calender.svg";
import FeatureList from "../FeatureList/FeatureList";

function Dashboard() {
  return (
    <div className="dashboard">
      <div className="container">
        <div className="dashboard__hero">
          <img className="dashboard__logo" src={logo} alt="" />
          <h1 className="dashboard_text">
            <span className="dashboard__event">Event</span>
            <span className="dashboard__tracker">Tracker</span>
          </h1>
          <p className="dashboard_message">
            Track all of your most important events all in one convenient place
          </p>
        </div>
        <FeatureList />
      </div>
    </div>
  );
}

export default Dashboard;
