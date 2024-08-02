// queries/placesQueries.js
const db = require("../db/dbConfig.js");

async function getAllPlaces() {
  const queryStr = "SELECT * FROM places;";
  try {
    const allPlaces = await db.any(queryStr);
    return allPlaces;
  } catch (error) {
    return error;
  }
}

async function getPlaceByID(id) {
  const queryStr = "SELECT * FROM places WHERE id=$[id];";
  try {
    const place = await db.one(queryStr, { id: Number(id) });
    return place;
  } catch (error) {
    return error;
  }
}

async function deletePlace(id) {
  const queryStr = "DELETE FROM places WHERE id=$[id] RETURNING *;";
  try {
    const place = await db.one(queryStr, { id: Number(id) });
    return place;
  } catch (error) {
    return error;
  }
}

async function createPlace(place) {
  const queryStr =
    "INSERT INTO places(name, city, address, description, image) VALUES " +
    "($[name], $[city], $[address], $[description], $[image]) " +
    "RETURNING *;";
  try {
    const newPlace = await db.one(queryStr, place);
    console.log(newPlace);
    return newPlace;
  } catch (error) {
    return error;
  }
}

async function updatePlace(id, place) {
  const queryStr =
    "UPDATE places " +
    "SET name=$[name], city=$[city], address=$[address], description=$[description], image=$[image] " +
    "WHERE id=$[id] RETURNING *;";
  try {
    const updatedPlade = await db.one(queryStr, { ...place, id: Number(id) });
    return updatedPlade;
  } catch (error) {
    return error;
  }
}

module.exports = {
  getAllPlaces,
  getPlaceByID,
  deletePlace,
  createPlace,
  updatePlace,
};
