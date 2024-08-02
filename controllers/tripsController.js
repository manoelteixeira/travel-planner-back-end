// controllers/tripsController.js
// DEPENDENCIES
const express = require("express");

// QUERIES
const {
  getAllTrips,
  getTripByID,
  deleteTrip,
  createTrip,
  updateTrip,
} = require("../queries/tripsQueries");

// VALIDATORS
const {
  validateName,
  validateCity,
  validateDescription,
  validateImage,
} = require("../validators/tripsValidator");

const tripsController = express.Router();

// ROUTES
const tripPlacesController = require("./tripPlacesController");
tripsController.use("/:trip_id/places", tripPlacesController);

// Index: localhost:4001/trips
tripsController.get("/", async (req, res) => {
  const trips = await getAllTrips();

  if (Array.isArray(trips)) {
    res.status(200).json(trips);
  } else {
    res.status(500).json({ error: "Internal Server Error." });
  }
});

// Create: localhost:4001/trips
tripsController.post(
  "/",
  validateName,
  validateCity,
  validateDescription,
  validateImage,
  async (req, res) => {
    const trip = await createTrip(req.body);
    console.log(trip);
    if (trip.id) {
      res.status(201).json(trip);
    } else {
      res.status(500).json({ error: "Internal Server Error." });
    }
  }
);

tripsController.get("/:id", async (req, res) => {
  const { id } = req.params;
  const trip = await getTripByID(id);
  console.log(trip);
  if (trip.id) {
    res.status(200).json(trip);
  } else if (trip.received == 0) {
    res.status(404).json({ error: "Trip Not Found." });
  } else {
    res.status(500).json({ error: "Internal Server Error." });
  }
});

// Update: localhost:4001/places/:id
tripsController.put(
  "/:id",
  validateName,
  validateCity,
  validateDescription,
  validateImage,
  async (req, res) => {
    const { id } = req.params;
    const trip = await updateTrip(id, req.body);
    if (trip.id) {
      res.status(200).json(trip);
    } else if (trip.received == 0) {
      res.status(404).json({ error: "Trip Not Found." });
    } else {
      res.status(500).json({ error: "Internal Server Error." });
    }
  }
);

// Delete: localhost:4001/trips/:id
tripsController.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const trip = await deleteTrip(id);
  console.log(trip);
  if (trip.id) {
    res.status(200).json(trip);
  } else if (trip.received == 0) {
    res.status(404).json({ error: "Trip Not Found." });
  } else {
    res.status(500).json({ error: "Internal Server Error." });
  }
});

module.exports = tripsController;
