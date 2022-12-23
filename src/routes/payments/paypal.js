const router = require("express").Router();
const request = require("request");
const { StatusCodes } = require("http-status-codes");
const { CLIENT_URL, API_PAYPAL, AUTH_PAYPAL } = require("../../utils/envs.js");

router.post("/", (req, res) => {
  const { price, redirect } = req.body;
  const a = redirect;
  const redir = `${CLIENT_URL}${a}`;
  const body = {
    intent: "CAPTURE",
    purchase_units: [
      {
        amount: {
          currency_code: "USD",
          value: price,
        },
      },
    ],
    application_context: {
      brand_name: "FoodExpress.app",
      landing_page: "NO_PREFERENCE",
      user_action: "PAY_NOW",
      return_url: redir,
      cancel_url: `${CLIENT_URL}/denegated`,
    },
  };

  try {
    request.post(
      `${API_PAYPAL}/v2/checkout/orders`,
      {
        auth: AUTH_PAYPAL,
        body,
        json: true,
      },
      (err, response) => {
        res.status(StatusCodes.ACCEPTED).json({ data: response.body });
      }
    );
  } catch (error) {
    return res
      .status(error.status || StatusCodes.INTERNAL_SERVER_ERROR)
      .send({ message: error.message || error });
  }
});

module.exports = router;
