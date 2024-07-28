const sequelize = require('../db');
const Category = require('./category');
const Product = require('./product');

// Set up associations
Category.hasMany(Product, { foreignKey: 'categoryId' });
Product.belongsTo(Category, { foreignKey: 'categoryId' });

// Export models and sequelize instance
const db = {
  sequelize,
  Category,
  Product
};

module.exports = db;
