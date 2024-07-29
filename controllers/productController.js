const Product = require('../models/product');
const Category = require('../models/category');

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.findAll({
      include: [
        {
          model: Category,
          attributes: ['name'] // Include only the category name, you can include other attributes if needed
        }
      ]
    });
    res.json(products);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
