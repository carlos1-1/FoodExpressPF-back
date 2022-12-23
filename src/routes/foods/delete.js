const router = require("express").Router();
const { Foods } = require("../../db");
const { ReasonPhrases, StatusCodes } = require("http-status-codes");

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  console.log(req.params)
  try {
    const deleteFood = Foods.destroy({ where: { id } });
    res.status(200).json({ message: "Product deleted", ...deleteFood });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

module.exports = router;
