const router = require("express").Router();
const { StatusCodes } = require("http-status-codes");
const createPayment = require("../../controllers/createPayment.js");

router.post("/", async (req, res) => {
  const { price, redirect } = req.body;
  try {
    const paymentData = await createPayment({ price, redirect });
    if (!paymentData)
      throw {
        status: StatusCodes.BAD_REQUEST,
        message: "Payment Data not available",
      };
    return res.status(StatusCodes.ACCEPTED).send(paymentData);
  } catch (error) {
    return res
      .status(error.status || StatusCodes.BAD_REQUEST)
      .send(error.message || error);
  }
});

module.exports = router;
