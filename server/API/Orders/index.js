import express from "express";


// Database Modals
import { OrderModel } from "../../database/order";

const Router = express.Router();

Router.get("/:userID", async (req, res) => {
  try {
    const { userID } = req.params;

    const getOrders = await OrderModel.findOne({ user: userID });

    return res.json({ orders: getOrders });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

Router.post("/new", async (req, res) => {
  try {
    const { orderData } = req.body;
    const updateOrders = await OrderModel.findByIdAndUpdate(
      orderData._id,
      {
        $push: { orderDetails: orderData.orderDetails },
      },
      { new: true }
    );
    
    return res.json({ orders: updateOrders });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

Router.post("/review/new", async (req, res) => {
  try {
    const { orderData } = req.body;
    const updateOrders = await OrderModel.findByIdAndUpdate(
      orderData._id,
      {
        $set: { orderRating: orderData.orderRating },
      },
      { new: true }
    );
    return res.json({ orders: updateOrders });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

Router.patch("/update", async (req, res) => {
  try {
    const { orderData } = req.body;
    const updateOrders = await OrderModel.findOneAndUpdate(
      {
        _id: orderData._id,
        "orderDetails._id": orderData.order_id,
      },
      {
        $set: { "orderDetails.$.status": orderData.status },
      },
      { new: true }
    );

    return res.json({ orders: updateOrders });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

export default Router;
