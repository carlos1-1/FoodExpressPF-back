const router = require("express").Router();

const { User, Order, Foods} = require('../../db');
const { ReasonPhrases, StatusCodes } = require("http-status-codes");

router.get("/", async (req, res) => {
  const { email } = req.query;
  let user;
  try {
    if (email) user = await User.findOne({ where: { email: email } });
    else user = await User.findAll();
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

module.exports = router;
