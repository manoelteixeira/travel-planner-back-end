// queries/tripPlacesQueries.js
const db = require("../db/dbConfig.js");

async function getTipPlaces(trip_id) {
  const queryStr = "SELECT * FROM trip_places WHERE trip_id=$[id];";
  try {
    const places = await db.any(queryStr, { id: Number(trip_id) });
    return places;
  } catch (error) {
    return error;
  }
}

async function getTripPlaceByID(id) {
  //   const queryStr = "SELECT * FROM trip_places WHERE id=$[id];";
  const queryStr =
    "SELECT trip_places.id, trip_places.trip_id, trip_places.place_id ,trip_places.is_favorite, " +
    "trip_places.visited, places.name, places.city, places.address, places.description, places.image " +
    "FROM trip_places JOIN places ON trip_places.place_id = places.id " +
    "WHERE trip_places.id=$[id];";
  try {
    const place = await db.one(queryStr, {
      id: Number(id),
    });
    return place;
  } catch (error) {
    return error;
  }
}

async function createTripPlace(tripPlace) {
  const queryStr =
    "INSERT INTO trip_places(is_favorite, visited, trip_id, place_id)VALUES " +
    "($[is_favorite], $[visited], $[trip_id], $[place_id]) " +
    "RETURNING *";
  try {
    const newTripPlace = db.one(queryStr, tripPlace);
    return newTripPlace;
  } catch (error) {
    return error;
  }
}

async function deleteTripPlace(id) {
  const queryStr = "DELETE FROM trip_places WHERE id=$[id] RETURNING *;";
  try {
    const tripPlace = await db.one(queryStr, {
      id: Number(id),
    });
    return tripPlace;
  } catch (error) {
    return error;
  }
}

async function updateTripPlace(id, tripPlace) {
  const keys = Object.keys(tripPlace).filter((key) => tripPlace[key] != null);
  const queryStr =
    "UPDATE trip_places " +
    `SET ${keys.map((key) => `${key}=$[${key}]`).join(", ")} ` +
    "WHERE id=$[id] RETURNING *;";
  try {
    const updatedTipPlace = await db.one(queryStr, {
      ...tripPlace,
      id: Number(id),
    });
    return updatedTipPlace;
  } catch (error) {
    return error;
  }
}

module.exports = {
  getTipPlaces,
  getTripPlaceByID,
  createTripPlace,
  deleteTripPlace,
  updateTripPlace,
};
