const router = require("express").Router();
const { NumberOfTables } = require("../../db");
const { ReasonPhrases, StatusCodes } = require("http-status-codes");

router.get("/", async (req, res) => {
  let tables;

  try {
    tables = await NumberOfTables.findAll();
    res.status(200).json(tables);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

module.exports = router;
