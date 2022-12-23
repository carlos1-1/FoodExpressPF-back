const router = require("express").Router();
const { Order } = require("../../db");
const { ReasonPhrases, StatusCodes } = require("http-status-codes");

router.post("/", async (req, res) => {
  const { coments, address, total, userId, FoodsToOrder } = req.body;

  try {
    const newOrder = await Order.create({
      coments,
      address,
      total,
      userId,
      FoodsToOrder,
    });
    newOrder.setFoods(FoodsToOrder);

    res
      .status(StatusCodes.ACCEPTED)
      .json({ Order: "created", id: newOrder.id });
  } catch (error) {
    res.status(StatusCodes.BAD_REQUEST).json({ error: error.message });
  }
});

module.exports = router;
