const { DataTypes } = require('sequelize');
const sequelize = require('../db');
const Category = require('./category'); // Assuming the Category model is in the same directory

const Product = sequelize.define('Product', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  categoryId: {
    type: DataTypes.INTEGER,
    references: {
      model: Category,
      key: 'id'
    }
  }
});


  // Product.belongsTo(Category, { foreignKey: 'categoryId' });


module.exports = Product;
