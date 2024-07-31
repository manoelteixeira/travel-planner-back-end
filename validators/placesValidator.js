// validators/placesValidator.js

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
  if (!req.body.city) {
    res.status(400).json({ error: "city is required" });
  } else if (typeof req.body.city !== "string") {
    res.status(400).json("city must be a string");
  } else if (req.body.city.length == 0) {
    res.status(400).json("city cannot be an empty string");
  } else {
    next();
  }
}

function validateAddress(req, res, next) {
  if (!req.body.address) {
    res.status(400).json({ error: "address is required" });
  } else if (typeof req.body.address !== "string") {
    res.status(400).json("address must be a string");
  } else if (req.body.address.length == 0) {
    res.status(400).json("address cannot be an empty string");
  } else {
    next();
  }
}

function validateDescription(req, res, next) {
  if (!req.body.description) {
    res.status(400).json({ error: "description is required" });
  } else if (typeof req.body.description !== "string") {
    res.status(400).json("description must be a string");
  } else if (req.body.description.length == 0) {
    res.status(400).json("description cannot be an empty string");
  } else {
    next();
  }
}

function validateImage(req, res, next) {
  if (!req.body.image) {
    res.status(400).json({ error: "image is required" });
  } else if (typeof req.body.image !== "string") {
    res.status(400).json("image must be a string");
  } else if (req.body.image.length == 0) {
    res.status(400).json("image cannot be an empty string");
  } else {
    next();
  }
}

module.exports = {
  validateName,
  validateCity,
  validateAddress,
  validateDescription,
  validateImage,
};
