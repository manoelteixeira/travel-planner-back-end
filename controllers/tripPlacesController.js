// controllers/tripPlacesController.js
// DEPENDENCIES
const express = require("express");

const tripPlacesController = express.Router({ mergeParams: true });

// QUERIES
const {
  getTipPlaces,
  getTripPlaceByID,
  createTripPlace,
  deleteTripPlace,
  updateTripPlace,
} = require("../queries/tripPlacesQueries");

const { getTripByID } = require("../queries/tripsQueries");
const { getPlaceByID } = require("../queries/placesQueries");

// VALIDATORS
const {
  validateIsFavorite,
  validateVisited,
  PlaceID,
} = require("../validators/tripPlacesValidator");

// ROUTES

// Index: localhost:4001/trips/:trip_id/places
tripPlacesController.get("/", async (req, res) => {
  const { trip_id } = req.params;
  const trip = await getTripByID(trip_id);
  if (trip.id) {
    const places = await getTipPlaces(trip_id);
    if (Array.isArray(places)) {
      res.status(200).json({ ...trip, places: places });
    } else {
      res.status(500).json({ error: "Internal Server Error." });
    }
  } else if (trip.received == 0) {
    res.status(404).json({ error: "Trip Not Found." });
  } else {
    res.status(500).json({ error: "Internal Server Error." });
  }
});

// Create: localhost:4001/trips/:trip_id/places
tripPlacesController.post(
  "/",
  validateIsFavorite,
  validateVisited,
  PlaceID,
  async (req, res) => {
    const { trip_id } = req.params;
    const trip = await getTripByID(trip_id);
    const place = await getPlaceByID(req.body.place_id);
    if (!place.id) {
      res.status(400).json({ error: "Place not Found" });
    } else if (!trip.id) {
      res.status(400).json({ error: "Trip not Found" });
    } else {
      const tripPlace = await createTripPlace({
        ...req.body,
        trip_id: trip_id,
      });
      if (tripPlace.id) {
        res.status(201).json(tripPlace);
      } else {
        res.status(500).json({ error: "Internal Server Error." });
      }
    }
  }
);

// Show: localhost:4001/places/:id/:trip_id/places/:id
tripPlacesController.get("/:id", async (req, res) => {
  const { trip_id, id } = req.params;
  const trip = await getTripByID(trip_id);
  if (trip.id) {
    const tripPlace = await getTripPlaceByID(id);
    if (tripPlace.id && tripPlace.trip_id == trip.id) {
      res.status(200).json(tripPlace);
    } else if (tripPlace.received == 0 || tripPlace.trip_id != trip.id) {
      res.status(404).json({ error: "Trip place Not Found." });
    } else {
      res.status(500).json({ error: "Internal Server Error." });
    }
  } else if (trip.received == 0) {
    res.status(404).json({ error: "Trip Not Found." });
  } else {
    res.status(500).json({ error: "Internal Server Error." });
  }
});

// Update: localhost:4001/trips/:trip_id/places/:id
tripPlacesController.put(
  "/:id",
  validateIsFavorite,
  validateVisited,
  PlaceID,
  async (req, res) => {
    const { trip_id, id } = req.params;
    const tripPlace = await getTripPlaceByID(id);
    if (tripPlace.id && tripPlace.trip_id == trip_id) {
      const updatedTripPlace = await updateTripPlace(id, req.body);
      if (updatedTripPlace.id) {
        res.status(200).json(updatedTripPlace);
      } else {
        res.status(500).json({ error: "Internal Server Error." });
      }
    } else if (tripPlace.trip_id != trip_id) {
      res.status(404).json({ error: "Trip Not Found." });
    } else {
      res.status(500).json({ error: "Internal Server Error." });
    }
  }
);

// Delete: localhost:4001/trips/:id/:trip_id/places/:id
tripPlacesController.delete("/:id", async (req, res) => {
  const { trip_id, id } = req.params;
  const tripPlace = await getTripPlaceByID(id);
  if (tripPlace.id && tripPlace.trip_id == trip_id) {
    const deletedTripPlace = await deleteTripPlace(id);
    if (deletedTripPlace.id) {
      res.status(200).json(tripPlace);
    } else {
      res.status(500).json({ error: "Internal Server Error." });
    }
  } else if (tripPlace.trip_id != trip_id) {
    res.status(404).json({ error: "Trip Not Found." });
  } else {
    res.status(500).json({ error: "Internal Server Error." });
  }
});

module.exports = tripPlacesController;
