const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  try {
    const tagData = await Product.findAll({
      include:
      {
        model: Product, attributes: ['product_name', 'price', 'stock', 'category_id']
      },
    });
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const TagData = await Tag.findByPk(req.params.id, {
      include: { model: Product, attributes: ['product_name', 'price', 'stock', 'category_id'] },
    });

    if (!TagData) {
      res.status(404).json({ message: 'No Products found with that Tag!' });
      return;
    }

    res.status(200).json(TagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// POST a new Tag
router.post('/', (req, res) => {
  /* req.body should look like this:
    {
      tag_name: "Basketballs",
      Ids: [1, 2, 3, 4]
    }
  */
  Tag.create(req.body)
    .then((Tag) => {
      // if there's Category tags, we need to create pairings to bulk create in the CategoryTag model

      // if no Category tags, just respond
      res.status(200).json(Tag);
    }).catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

// PUT update on Tag by ID
router.put('/:id', (req, res) => {
  // update Tag data
  Tag.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then(tagData => {
      if (!tagData) {
        res.status(404).json({ message: 'No Tag found with that ID.' });
        return;
      }
      res.json(tagData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// DELETE on TAG by ID
router.delete('/:id', (req, res) => {
  Tag.destroy({
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
