const router = require("express").Router();
const { Order, User, Foods_Order, Foods } = require("../../db");
const { ReasonPhrases, StatusCodes } = require("http-status-codes");

router.get("/", async (req, res) => {
  let orders;

  try {
    orders = await Order.findAll({include: Foods});
    res.status(200).json(orders);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

router.get("/:userId", async (req, res) => {
  const { userId } = req.params;
  
  try {
    const userOrders = await Order.findAll({where: { userId: userId }, include: Foods});
    return res.status(200).json(userOrders);
  } catch (error) {
    return res
      .status(error.status || StatusCodes.BAD_REQUEST)
      .send(error.reason || error);
  }
});

module.exports = router;
