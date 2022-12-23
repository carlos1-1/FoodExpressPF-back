const router = require("express").Router();
const { NumberOfTables } = require("../../db");
const { ReasonPhrases, StatusCodes } = require("http-status-codes");

router.post("/", async (req, res) => {
  const { capacity } = req.body;

  try {
    const newNumber = await NumberOfTables.create({
      capacity,
    });

    res
      .status(StatusCodes.ACCEPTED)
      .json({ Number: "created", id: newNumber.id });
  } catch (error) {
    res.status(StatusCodes.BAD_REQUEST).json({ error: error.message });
  }
});

module.exports = router;
