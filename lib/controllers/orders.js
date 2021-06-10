const { Router } = require('express');
const Order = require('../models/Order');

// export default Router.......
module.exports = Router() // app.post(....)
  .post('/api/v1/orders', async (req, res) => {
    try {
      const order = await Order.insert(req.params.quantity);
      res.send(order);
    } catch(err) {
      res.status(500).send(err);
    }
  })

  .get('/api/v1/orders', async (req, res) => {
    try {
      const orders = await Order.select();
      res.send(orders);
    }
    catch(err){
      res.status(500).send(err);
    }
  })

  .put('/api/v1/orders/;id', async (req, res) => {
    try {
      const matching = req.body;
      const order = await Order.update(req.params.id, matching);
      res.send(order);
    }
    catch(err){
      res.status(500).send(err);
    }
  })

  .delete('/api/v1/orders/:id', async (req, res) => {
    try {
      const deleted =  await Order.delete(req.params.id);
      res.send(deleted);
    }
    catch(err){
      res.status(500).send(err);
    }
  });
  

