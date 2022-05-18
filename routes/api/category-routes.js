const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

// GET all categories
router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
});

// GET one category by id
router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
});

// POST a new category
router.post('/', (req, res) => {
  // create a new category
});

// PUT update a category
router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

// DELETE a category by id
router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
