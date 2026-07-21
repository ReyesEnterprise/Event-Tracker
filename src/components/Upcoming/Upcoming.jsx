import UpcomingHeader from "./UpcomingHeader";
import UpcomingSummary from "./UpcomingSummary";
import EventList from "./EventList";

function Upcoming() {
  const events = [
    {
      id: 1,
      title: "Family BBQ",
      category: "family",
      day: "05",
      month: "July",
      color: "blue",
    },
  ];

  return (
    <div className="upcoming">
      <UpcomingHeader />

      <div className="upcoming__content">
        <UpcomingSummary events={events} />
        <EventList events={events} />
      </div>
    </div>
  );
}

export default Upcoming;
