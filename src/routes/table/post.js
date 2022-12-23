const router = require("express").Router();
const { Table } = require("../../db");
const { ReasonPhrases, StatusCodes } = require("http-status-codes");

router.post("/", async (req, res) => {
  const {
    status,
    capacity,
    timestamps,
    reservation_data,
    hour,
    reserve_owner,
    foods,
  } = req.body;

  try {
    const newTable = await Table.create({
      status,
      capacity,
      timestamps,
      reservation_data,
      hour,
      reserve_owner,
      foods,
    });
    newTable.setFoods(foods);

    res
      .status(StatusCodes.ACCEPTED)
      .json({ Table: "created", id: newTable.id });
  } catch (error) {
    res.status(StatusCodes.BAD_REQUEST).json({ error: error.message });
  }
});

module.exports = router;
