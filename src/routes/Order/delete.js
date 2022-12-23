const router = require("express").Router();
const { Order } = require("../../db");
const { ReasonPhrases, StatusCodes } = require("http-status-codes");

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deleteOrder = Order.destroy({ where: { id } });
    res.status(200).json({ message: "Order deleted", ...deleteOrder });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

module.exports = router;
