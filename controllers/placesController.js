// controllers/placesController.js

// DEPENDENCIES
const express = require("express");
const placesController = express.Router();

// QUERIES
const {
  getAllPlaces,
  getPlaceByID,
  deletePlace,
  createPlace,
  updatePlace,
} = require("../questies/placesQueries");

// VALIDATORS
const {
  validateName,
  validateCity,
  validateAddress,
  validateDescription,
  validateImage,
} = require("../validators/placesValidator");

// ROUTES

// Index: localhost:4001/places
placesController.get("/", async (req, res) => {
  const places = await getAllPlaces();
  if (Array.isArray(places)) {
    res.status(200).json(places);
  } else {
    res.status(500).json({ error: "Internal Server Error." });
  }
});

// Create: localhost:4001/places
placesController.post(
  "/",
  validateName,
  validateCity,
  validateAddress,
  validateDescription,
  validateImage,
  async (req, res) => {
    const place = await createPlace(req.body);
    if (place.id) {
      res.status(201).json(place);
    } else {
      res.status(500).json({ error: "Internal Server Error." });
    }
  }
);

// Show: localhost:4001/places/:id
placesController.get("/:id", async (req, res) => {
  const { id } = req.params;
  const place = await getPlaceByID(id);
  if (place.id) {
    res.status(200).json(place);
  } else if (place.received == 0) {
    res.status(404).json({ error: "Place Not Found." });
  } else {
    res.status(500).json({ error: "Internal Server Error." });
  }
});

// Delete: localhost:4001/places/:id
placesController.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const place = await deletePlace(id);
  if (place.id) {
    res.status(200).json(place);
  } else if (place.received == 0) {
    res.status(404).json({ error: "Place Not Found." });
  } else {
    res.status(500).json({ error: "Internal Server Error." });
  }
});

// Show: localhost:4001/places/:id
placesController.put(
  "/:id",
  validateName,
  validateCity,
  validateAddress,
  validateDescription,
  validateImage,
  async (req, res) => {
    const { id } = req.params;
    const place = await updatePlace(id, req.body);
    if (place.id) {
      res.status(200).json(place);
    } else if (place.received == 0) {
      res.status(404).json({ error: "Place Not Found." });
    } else {
      res.status(500).json({ error: "Internal Server Error." });
    }
  }
);

module.exports = placesController;
