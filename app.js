const express = require('express');
const bodyParser = require('body-parser');
const productRoutes = require('./routes/productRoutes');
const orderRoutes = require('./routes/orderRoutes');
const sequelize = require('./db');
const cors = require('cors');
const db = require('./models');
const app = express();
app.use(bodyParser.json());
app.use(cors())

app.use('/api', productRoutes);
app.use('/api', orderRoutes);

db.sequelize.sync()
  .then(result => {
    app.listen(3000, () => console.log('Server is running on port 3000'));
  })
  .catch(err => console.log(err));
