const express = require('express');
const db = require('../cars/carsModel');

const {
  validateId,
  validateCarData
} = require('../middleware/validate')

const router = express.Router();

// /api/cars

// GET - /api/cars
router.get('/', (req, res, next) => {
  db.find(req.query)
    .then(cars => {
      res.status(200).json(cars);
    })
    .catch(err => {
      next(err);
    })
})

// GET - /api/cars/:id
router.get('/:id', validateId(), (req, res) => {
  res.json(req.car);
})

// POST - /api/cars
router.post('/', validateCarData(), (req, res, next) => {
  db.add(req.body)
    .then(car => {
      res.status(201).json(car);
    })
    .catch(err => {
      next(err);
    })
})

// PUT - /api/cars/:id
router.put('/:id', validateCarData(), validateId(), (req, res, next) => {
  db.update(req.car.id, req.body)
    .then(car => {
      res.status(200).json(car);
    })
    .catch(err => {
      next(err);
    }) 
})

// DELETE - /api/cars/:id
router.delete('/:id', validateId(), (req, res, next) => {
  db.remove(req.car.id)
    .then(() => {
      res.status(200).json({
        message: "The car has been deleted from the database."
      })
    })
    .catch(err => {
      next(err);
    })
})

module.exports = router;