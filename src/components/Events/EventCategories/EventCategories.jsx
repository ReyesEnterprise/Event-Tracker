import "./EventCategories.css";

function EventCategories({ events }) {
  return (
    <section className="eventCategories">
      <h2 className="eventCategories__title">Categories</h2>

      <ul className="eventCategories__list">
        <li className="eventCategories__item">
          <button
            className="eventCategories__button eventCategories__button--all"
            type="button"
            aria-pressed="true"
          >
            All Events
          </button>
        </li>

        <li className="eventCategories__item">
          <button
            className="eventCategories__button eventCategories__button--birthday"
            type="button"
            aria-pressed="false"
          >
            Birthdays
          </button>
        </li>

        <li className="eventCategories__item">
          <button
            className="eventCategories__button eventCategories__button--family"
            type="button"
            aria-pressed="false"
          >
            Family
          </button>
        </li>

        <li className="eventCategories__item">
          <button
            className="eventCategories__button eventCategories__button--work"
            type="button"
            aria-pressed="false"
          >
            Work
          </button>
        </li>

        <li className="eventCategories__item">
          <button
            className="eventCategories__button eventCategories__button--holiday"
            type="button"
            aria-pressed="false"
          >
            Holidays
          </button>
        </li>

        <li className="eventCategories__item">
          <button
            className="eventCategories__button eventCategories__button--fun"
            type="button"
            aria-pressed="false"
          >
            Fun
          </button>
        </li>

        <li className="eventCategories__item">
          <button
            className="eventCategories__button eventCategories__button--other"
            type="button"
            aria-pressed="false"
          >
            Other
          </button>
        </li>
      </ul>
    </section>
  );
}

export default EventCategories;
