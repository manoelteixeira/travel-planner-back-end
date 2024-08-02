// validators/tripsValidator.js

function validateName(req, res, next) {
  if (!req.body.name) {
    res.status(400).json({ error: "name is required" });
  } else if (typeof req.body.name !== "string") {
    res.status(400).json("name must be a string");
  } else if (req.body.name.length == 0) {
    res.status(400).json("name cannot be an empty string");
  } else {
    next();
  }
}

function validateCity(req, res, next) {
  if (!req.body.city || req.body.city.length == 0) {
    req.body.city = null;
    next();
  } else if (typeof req.body.city !== "string") {
    res.status(400).json({ error: "city must be a string" });
  } else {
    next();
  }
}

function validateDescription(req, res, next) {
  if (!req.body.description || req.body.description.length == 0) {
    req.body.description = null;
    next();
  } else if (typeof req.body.description !== "string") {
    res.status(400).json({ error: "description must be a string" });
  } else {
    next();
  }
}

function validateImage(req, res, next) {
  if (!req.body.image || req.body.image.length == 0) {
    req.body.image = null;
    next();
  } else if (typeof req.body.image !== "string") {
    res.status(400).json({ error: "image must be a string" });
  } else {
    next();
  }
}

module.exports = {
  validateName,
  validateCity,
  validateDescription,
  validateImage,
};
