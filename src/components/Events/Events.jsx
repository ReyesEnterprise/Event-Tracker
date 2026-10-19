import EventHeader from "./EventHeader/EventHeader";
import EventSummary from "./EventsSummary/EventsSummary";
import EventCategories from "./EventCategories/EventCategories";
import EventModal from "./EventModal/EventModal";
import EventModalpreview from "./EventModalPreview/EventModalPreview";

// styling
import "./Events.css";

// react state
import { useState } from "react";

function Events() {
  const [events, setEvents] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  // function to collect the form data
  function handleAddEvent(newEvent) {
    setEvents((previousEvents) => [...previousEvents, newEvent]);
    setIsModalOpen(false);
  }

  function handleOpenPreview(event) {
    setSelectedEvent(event);
  }

  return (
    <div className="container">
      <div className="events">
        <EventHeader />
        <div className="events__upcoming">
          <button className="events__btn" onClick={() => setIsModalOpen(true)}>
            Add Event
          </button>
        </div>
        <div className="events__content">
          <EventSummary events={events} onOpen={handleOpenPreview} />
          <EventCategories events={events} />
        </div>
        {isModalOpen && (
          <EventModal onClose={setIsModalOpen} onAddEvent={handleAddEvent} />
        )}
        {selectedEvent && (
          <EventModalpreview
            event={selectedEvent}
            onClose={() => setSelectedEvent(null)}
          />
        )}
      </div>
    </div>
  );
}

export default Events;
