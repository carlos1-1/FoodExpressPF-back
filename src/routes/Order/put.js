const router = require("express").Router();
const { Order } = require("../../db");
const { ReasonPhrases, StatusCodes } = require("http-status-codes");

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { coments, address, total, state } = req.body;
  let update;
  try {
    update = await Order.update(
      { coments, address, total, state },
      { where: { id } }
    );

    if (update[0] == 0)
      throw {
        status: StatusCodes.NOT_MODIFIED,
        reason: ReasonPhrases.NOT_MODIFIED,
      };
    return res.status(StatusCodes.OK).json({ message: "Updated food" });
  } catch (error) {
    res.status(404).json({ error });
  }
});

module.exports = router;
