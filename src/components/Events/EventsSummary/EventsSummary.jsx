import "./EventsSummary.css";
import {
  categoryIcons,
  categoryColors,
  formatEventDate,
  formatEventNotes,
} from "../utils/eventHelpers";

function EventsSummary({ events, onOpen }) {
  return (
    <section className="eventSummary">
      <h2 className="eventSummary__title">Upcoming Events</h2>

      {events.length === 0 ? (
        <div className="eventSummary__empty">
          <p className="eventSummary__message">No upcoming events yet</p>

          <p className="eventSummary__description">
            Add an event to get started!
          </p>
        </div>
      ) : (
        <div className="eventSummary__list">
          {events.map((event, index) => {
            const category = (event.category || "event").toLowerCase();

            const icon = categoryIcons[category] || "📌";
            const color = categoryColors[category] || "event";

            const { month, dayNumber, weekday } = formatEventDate(event.date);

            return (
              <article
                className="eventSummary__item"
                key={event._id || event.id || `${event.title}-${index}`}
              >
                {/* 1. Category icon */}
                <div
                  className={`eventSummary__icon eventSummary__icon--${color}`}
                  aria-hidden="true"
                >
                  <span>{icon}</span>
                </div>

                {/* 2. Event title, category, and notes */}
                <div className="eventSummary__details">
                  <div className="eventSummary__heading">
                    <h3 className="eventSummary__event-title">{event.title}</h3>

                    <span
                      className={`eventSummary__category eventSummary__category--${color}`}
                    >
                      {event.category || "Event"}
                    </span>
                  </div>

                  <p className="eventSummary__notes" title={event.notes || ""}>
                    {formatEventNotes(event.notes)}
                  </p>
                </div>

                {/* 3. Date */}
                <div className="eventSummary__date">
                  <span className="eventSummary__month">{month}</span>

                  <span className="eventSummary__day-number">{dayNumber}</span>

                  <span className="eventSummary__weekday">{weekday}</span>
                </div>

                {/* 4. Arrow */}
                <button
                  className="eventSummary__arrow"
                  aria-label={`View details for ${event.title}`}
                  onClick={() => onOpen(event)}
                >
                  ›
                </button>
              </article>
            );
          })}
        </div>
      )}
    </section>
  );
}

export default EventsSummary;
