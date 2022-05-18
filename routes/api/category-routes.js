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
      if (req.body.newCategory.length) {
        const CategoryTagArr = req.body.Id.map((tag_id) => {
          return {
            category_name, id,
          };
        });
        return CategoryTag.bulkCreate(CategoryTagArr);
      }
      // if no Category tags, just respond
      res.status(200).json(Category);
    })
    .then((CategoryTagIds) => res.status(200).json(CategoryTagIds))
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

// // PUT update a category
// router.put('/:id', (req, res) => {
//   // update Category data
//   Category.update(req.body, {
//     where: {
//       id: req.params.id,
//     },
//   })
//     .then((category) => {
//       // find all associated tags from category_Tag
//       return CategoryTag.findAll({ where: { category_name: req.params.id } });
//     })
//     .then((categoryTags) => {
//       // get list of current tag_ids
//       const categoryTagIds = categoryTags.map(({ category_name: }) => category_name: );
//       // create filtered list of new category_ids
//       const newCategoryTags = req.body.catIds
//         .filter((catIds) => !categoryTagIds.includes(catIds))
//         .map((catIds) => {
//           return {
//             id: req.params.id,
//             category_name,
//           };
//         });
//       // figure out which ones to remove
//       const categoriesToRemove = categoryTags
//         .filter(({ catIds }) => !req.body.catIds.includes(catIds))
//         .map(({ id }) => id);

//       // run both actions
//       return Promise.all([
//         CategoryTag.destroy({ where: { id: categoriesToRemove } }),
//         CategoryTag.bulkCreate(newCategoryTags),
//       ]);
//     })
//     .then((updatedCategoryTags) => res.json(updatedCategoryTags))
//     .catch((err) => {
//       // console.log(err);
//       res.status(400).json(err);
//     });
// });

// DELETE a category by id
router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
