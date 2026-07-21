import "./UpcomingHeader.css";
import julyImg from "../../assets/react.svg"; // example

function UpcomingHeader() {
  const date = new Date();
  const currentMonth = date.toLocaleString("default", { month: "long" });

  const monthsData = [
    { name: "July", image: julyImg },
    // add more later
  ];

  const currentMonthData = monthsData.find(
    (month) => month.name === currentMonth,
  );

  return (
    <div className="container">
      <div className="upcoming__header">
        <div className="upcoming__text">
          <p>Here’s what’s coming up in</p>
          <h1>{currentMonth}</h1>
        </div>

        {currentMonthData && (
          <img
            src={currentMonthData.image}
            alt={currentMonth}
            className="upcoming__image"
          />
        )}
      </div>
    </div>
  );
}

export default UpcomingHeader;
