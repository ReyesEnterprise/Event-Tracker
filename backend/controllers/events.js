import Event from "../models/event.js";

export const getEvents = (req, res) => {
  Event.find({})
    .then((events) => {
      res.status(200).send({ data: events });
    })
    .catch((error) => {
      res.status(500).send({
        message: "An error occurred on the server",
      });
    });
};

export const createEvent = (req, res) => {
  const { title, date, category, time, location, notes } = req.body;

  Event.create({ title, date, category, time, location, notes })
    .then((event) => {
      res.status(201).send({ data: event });
    })
    .catch((error) => {
      res.status(400).send({
        message: "Invalid event data",
      });
    });
};
