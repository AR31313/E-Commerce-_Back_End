//Activity 23 ORM
const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

// GET all categories
router.get('/', async (req, res) => {
  try {
    const CategoryData = await Category.findAll({
      include:
        { model: Product, attributes: ['product_name'] },
    });
    res.status(200).json(CategoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET one category by id
// find one category by its `id` value
// be sure to include its associated Products
router.get('/:id', (req, res) => {
  try {
    const CategoryData = await Category.findByPk(req.params.id, {
      include: { model: Product, attributes: ['category_id'] },
    });

    if (!CategoryData) {
      res.status(404).json({ message: 'No Products found with that Category!' });
      return;
    }

    res.status(200).json(CategoryData);
  } catch (err) {
    res.status(500).json(err);
  }
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
