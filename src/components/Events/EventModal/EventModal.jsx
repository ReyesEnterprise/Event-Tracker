import "./EventModal.css";

function EventModal({ onClose, onAddEvent }) {
  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const newEvent = {
      title: formData.get("title"),
      date: formData.get("date"),
      time: formData.get("time"),
      category: formData.get("category"),
      location: formData.get("location"),
      notes: formData.get("notes"),
    };

    onAddEvent(newEvent);
  }
  return (
    <div className="eventModal">
      <div className="eventModal__content">
        <h2 className="eventModal__title">Add Event</h2>

        <form className="eventModal__form" onSubmit={handleSubmit}>
          <label className="eventModal__label" htmlFor="event-title">
            Event Title
          </label>

          <input
            className="eventModal__input"
            id="event-title"
            type="text"
            name="title"
            placeholder="Enter event title"
            required
          />

          <label className="eventModal__label" htmlFor="event-date">
            Date
          </label>

          <input
            className="eventModal__input"
            id="event-date"
            type="date"
            name="date"
            required
          />

          <label className="eventModal__label" htmlFor="event-time">
            Time
          </label>

          <input
            className="eventModal__input"
            id="event-time"
            type="time"
            name="time"
          />

          <label className="eventModal__label" htmlFor="event-category">
            Category
          </label>

          <select
            className="eventModal__select"
            id="event-category"
            name="category"
            required
            defaultValue=""
          >
            <option value="" disabled>
              Select a category
            </option>
            <option value="Birthday">Birthday</option>
            <option value="Family">Family</option>
            <option value="Work">Work</option>
            <option value="Holiday">Holiday</option>
            <option value="Fun">Fun</option>
            <option value="Other">Other</option>
          </select>

          <label className="eventModal__label" htmlFor="event-location">
            Location
          </label>

          <input
            className="eventModal__input"
            id="event-location"
            type="text"
            name="location"
            placeholder="Enter location"
          />

          <label className="eventModal__label" htmlFor="event-notes">
            Notes
          </label>

          <textarea
            className="eventModal__textarea"
            id="event-notes"
            name="notes"
            placeholder="Add any additional details"
            rows="3"
          />

          <div className="eventModal__actions">
            <button
              type="button"
              className="eventModal__button eventModal__button--cancel"
              onClick={() => onClose(false)}
            >
              Cancel
            </button>

            <button
              type="submit"
              className="eventModal__button eventModal__button--submit"
            >
              Add Event
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EventModal;
