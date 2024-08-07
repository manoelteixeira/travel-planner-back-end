// validators/tripPlacesValidator.js
function validateIsFavorite(req, res, next) {
  if (!req.body.is_favorite) {
    req.body.is_favorite = false;
    next();
  } else if (typeof req.body.is_favorite !== "boolean") {
    res.status(400).json({ error: "is_favorite must be boolean" });
  } else {
    next();
  }
}
function validateVisited(req, res, next) {
  if (!req.body.visited) {
    req.body.visited = false;
    next();
  } else if (typeof req.body.visited !== "boolean") {
    res.status(400).json({ error: "visited must be boolean" });
  } else {
    next();
  }
}

function PlaceID(req, res, next) {
  if (!req.body.place_id) {
    res.status(400).json({ error: "place_id is required" });
  } else {
    next();
  }
}

module.exports = {
  validateIsFavorite,
  validateVisited,
  PlaceID,
};
