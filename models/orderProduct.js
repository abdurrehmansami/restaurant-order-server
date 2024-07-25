const { DataTypes } = require('sequelize');
const sequelize = require('../db');
const Order = require('./order');
const Product = require('./product');

const OrderProduct = sequelize.define('OrderProduct', {
  orderId: {
    type: DataTypes.INTEGER,
    references: {
      model: Order,
      key: 'id'
    },
  },
  productId: {
    type: DataTypes.INTEGER,
    references: {
      model: Product,
      key: 'id'
    },
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

Order.belongsToMany(Product, { 
    through: OrderProduct,
    foreignKey: 'orderId',
});
Product.belongsToMany(Order, { 
    through: OrderProduct,
    foreignKey: 'productId',
});

module.exports = OrderProduct;
