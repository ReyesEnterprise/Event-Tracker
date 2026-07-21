import "./FeatureList.css";

import calendarIcon from "../../assets/icon_calender.svg";
import bellIcon from "../../assets/icon_bell.svg";
import locationIcon from "../../assets/icon_location.svg";
import shareIcon from "../../assets/icon_share-three.svg";

const features = [
  { icon: calendarIcon, text: "Organize" },
  { icon: bellIcon, text: "Remind" },
  { icon: locationIcon, text: "Never Miss" },
  { icon: shareIcon, text: "Share" },
];

function FeatureList() {
  return (
    <ul className="features">
      {features.map((feature, index) => (
        <li key={index} className="features__item">
          <img
            src={feature.icon}
            alt={feature.text}
            className="features__icon"
          />
          <p className="features__text">{feature.text}</p>
        </li>
      ))}
    </ul>
  );
}

export default FeatureList;
