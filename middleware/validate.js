const db = require('../cars/carsModel');

function validateId() {
  return (req, res, next) => {
    db.findById(req.params.id)
      .then(car => {
        if (car) {
          req.car = car
          next();
        } else {
          res.status(404).json({ message: "Car not found" })
        }
      })
      .catch(err => {
        console.error(err);
        next(err);
      })
  }
}

function validateCarData() {
  return (req, res, next) => {
    if (!req.body.VIN || !req.body.make || !req.body.model || !req.body.mileage) {
      return res.status(400).json({
        message: "Please enter the VIN, make, model, and mileage."
      })
    }
    next();
  }
}

module.exports = {
  validateId,
  validateCarData
}