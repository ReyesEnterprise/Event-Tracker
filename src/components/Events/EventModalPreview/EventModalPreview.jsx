import "./EventModalPreview.css";

function EventModalPreview({ event, onClose }) {
  if (!event) {
    return null;
  }

  return (
    <div className="eventModal" onClick={() => onClose()}>
      <div
        className="eventModal__content"
        onClick={(clickEvent) => clickEvent.stopPropagation()}
      >
        <h2 className="eventModal__title">{event.title}</h2>

        <div className="eventModal__details">
          <p>
            <strong>Category:</strong> {event.category || "Not specified"}
          </p>

          <p>
            <strong>Date:</strong> {event.date || "Not specified"}
          </p>

          <p>
            <strong>Time:</strong> {event.time || "Not specified"}
          </p>

          <p>
            <strong>Location:</strong> {event.location || "Not specified"}
          </p>

          <p>
            <strong>Notes:</strong> {event.notes || "No additional details"}
          </p>
        </div>

        <div className="eventModal__actions">
          <button
            type="button"
            className="eventModal__button eventModal__button--cancel"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default EventModalPreview;
