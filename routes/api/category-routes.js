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
router.get('/:id', async (req, res) => {
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
  /* req.body should look like this:
    {
      category_name: "Basketballs",
      Ids: [1, 2, 3, 4]
    }
  */
  Category.create(req.body)
    .then((Category) => {
      // if there's Category tags, we need to create pairings to bulk create in the CategoryTag model

      // if no Category tags, just respond
      res.status(200).json(Category);
    }).catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

// PUT update a category
router.put('/:id', (req, res) => {
  // update Category data
  Category.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then(categoryData => {
      if (!categoryData) {
        res.status(404).json({ message: 'No Category found with that ID.' });
        return;
      }
      res.json(categoryData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});


// DELETE a category by id
router.delete('/:id', (req, res) => {
  Category.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((data) => {
      // find all associated tags from ProductTag
      res.sendStatus(200)
    }).catch((err) => {
      // console.log(err);
      res.status(400).json(err);
    });
});

module.exports = router;
