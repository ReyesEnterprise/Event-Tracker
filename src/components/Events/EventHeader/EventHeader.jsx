import "./EventHeader.css";
import monthThemes from "../../../data/monthThemes";

function EventsHeader() {
  const currentMonthIndex = new Date().getMonth();
  const currentMonth = monthThemes[currentMonthIndex];

  return (
    <div className="eventsHeader">
      <img
        src={currentMonth.overlay}
        alt={currentMonth.name}
        aria-hidden="true"
        className="eventsHeader__overlay"
      />

      <div className="eventsHeader__text">
        <p>Here’s what’s coming up in</p>
        <h1>{currentMonth.name}</h1>
      </div>

      {currentMonth.image && (
        <div className="eventsHeader__artwork">
          <img
            src={currentMonth.image}
            alt={currentMonth.imageAlt}
            className="eventsHeader__image"
          />
        </div>
      )}
    </div>
  );
}

export default EventsHeader;
