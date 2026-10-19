import "./Home.css";

import logo from "../../assets/Event_logo-thin.png";
import FeatureList from "../FeatureList/FeatureList";

function Home() {
  return (
    <div className="home">
      <div className="container">
        <div className="home__hero">
          <img className="home__logo" src={logo} alt="" />
          <h1 className="home_text">
            <span className="home__event">Event</span>
            <span className="home__tracker">Tracker</span>
          </h1>
          <p className="home_message">
            Track all of your most important events all in one convenient place
          </p>
        </div>
        <FeatureList />
      </div>
    </div>
  );
}

export default Home;
