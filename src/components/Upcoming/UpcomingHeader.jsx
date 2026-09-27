import "./UpcomingHeader.css";
import monthThemes from "../../data/monthThemes";

function UpcomingHeader() {
  const currentMonthIndex = new Date().getMonth();
  const currentMonth = monthThemes[currentMonthIndex];

  return (
    <div className="container">
      <div className="upcoming__header">
        <img
          src={currentMonth.overlay}
          alt={currentMonth.name}
          aria-hidden="true"
          className="upcoming__overlay"
        />

        <div className="upcoming__text">
          <p>Here’s what’s coming up in</p>
          <h1>{currentMonth.name}</h1>
        </div>

        {currentMonth.image && (
          <div className="upcoming__artwork">
            <img
              src={currentMonth.image}
              alt={currentMonth.imageAlt}
              className="upcoming__image"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default UpcomingHeader;
