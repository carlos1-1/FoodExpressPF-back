const router = require("express").Router();
const { Table } = require("../../db");
const { ReasonPhrases, StatusCodes } = require("http-status-codes");

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { number, status, capacity, timestamps } = req.body;
  let update;
  try {
    update = await Table.update(
      { number, status, capacity, timestamps },
      { where: { id } }
    );

    if (update[0] == 0)
      throw {
        status: StatusCodes.NOT_MODIFIED,
        reason: ReasonPhrases.NOT_MODIFIED,
      };
    return res.status(StatusCodes.OK).json({ message: "Updated table" });
  } catch (error) {
    res.status(404).json({ error });
  }
});

module.exports = router;
