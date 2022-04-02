const express = require('express');
//const faker = require('faker');
const router = express.Router();


router.get('/:categoryId/products/:productId', (req, res)=>{
  const { categoryId, productId} = req.params;
  res.json({
    categoryId,
    productId
  });
});

router.get('/',(req,res)=>{
  const { categoryId } = req.params
  res.json([
    {
      categoryId,
      category: 'Food',
      products: []
    },
    {
      categoryId,
      category: 'Games',
      products: []
    },
    {
      categoryId,
      category: 'clothes',
      products: []
    },
  ])
})

module.exports = router;
