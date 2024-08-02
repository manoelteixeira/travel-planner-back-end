// queries/tripsQueries.js
const db = require("../db/dbConfig.js");

async function getAllTrips() {
  const queryStr = "SELECT * FROM trips;";
  try {
    const trips = await db.any(queryStr);
    return trips;
  } catch (error) {
    return error;
  }
}

async function getTripByID(id) {
  const queryStr = "SELECT * FROM trips WHERE id=$[id];";
  try {
    const trip = await db.one(queryStr, { id: Number(id) });
    return trip;
  } catch (error) {
    return error;
  }
}

async function deleteTrip(id) {
  const queryStr = "DELETE FROM trips WHERE id=$[id] RETURNING *;";
  try {
    const trip = await db.one(queryStr, { id: Number(id) });
    return trip;
  } catch (error) {
    return error;
  }
}

async function createTrip(trip) {
  const queryStr =
    "INSERT INTO trips(name, city, description, image) VALUES " +
    "($[name], $[city], $[description], $[image]) " +
    "RETURNING *;";
  try {
    const newTrip = await db.one(queryStr, trip);
    return newTrip;
  } catch (error) {
    return error;
  }
}

async function updateTrip(id, trip) {
  const keys = Object.keys(trip).filter((key) => trip[key] != null);
  const queryStr =
    "UPDATE trips " +
    `SET ${keys.map((key) => `${key}=$[${key}]`).join(", ")} ` +
    "WHERE id=$[id] RETURNING *;";
  try {
    const updatedTrip = await db.one(queryStr, { ...trip, id: Number(id) });
    return updatedTrip;
  } catch (error) {
    return error;
  }
}

module.exports = {
  getAllTrips,
  getTripByID,
  deleteTrip,
  createTrip,
  updateTrip,
};
