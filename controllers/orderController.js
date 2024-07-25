const Order = require('../models/order');
const OrderProduct = require('../models/orderProduct');

exports.createOrder = async (req, res) => {
  const { customerName, customerPhone, customerAddress, totalAmount, products } = req.body;

  try {
    const order = await Order.create({ customerName, customerAddress, totalAmount });

    products.forEach(async product => {
      await OrderProduct.create({
        orderId: order.id,
        productId: product.id,
        quantity: product.quantity
      });
    });

    res.status(201).json(order);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
