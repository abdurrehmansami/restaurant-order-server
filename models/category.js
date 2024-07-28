const { DataTypes } = require('sequelize');
const sequelize = require('../db');
const Product = require('./product')
const Category = sequelize.define('Category', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
},{
  timestamps:false
});
  // Category.hasMany(Product, { foreignKey: 'categoryId' });
module.exports = Category;
