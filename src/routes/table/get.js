const router = require("express").Router();
const { Table, Foods } = require("../../db");
const { ReasonPhrases, StatusCodes } = require("http-status-codes");

router.get("/", async (req, res) => {
  let tables;

  try {
    tables = await Table.findAll({ include: Foods });
    res.status(200).json(tables);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

router.get("/:userId", async (req, res) => {
  const { userId } = req.params;

  try {
    const userTables = await Table.findAll({
      where: { reserve_owner: userId },
      include: Foods,
    });
    return res.status(200).json(userTables);
  } catch (error) {
    return res
      .status(error.status || StatusCodes.BAD_REQUEST)
      .send(error.reason || error);
  }
});

module.exports = router;
