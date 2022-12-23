const router = require("express").Router();
const { NumberOfTables } = require("../../db");
const { ReasonPhrases, StatusCodes } = require("http-status-codes");

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deleteTable = NumberOfTables.destroy({ where: { id } });
    res.status(200).json({ Delete: "Ok", ...deleteTable });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

module.exports = router;
