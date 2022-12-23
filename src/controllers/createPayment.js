const axios = require("axios");
const { StatusCodes } = require("http-status-codes");
const { API_MERCADO, CLIENT_URL, TOKEN_MERCADO } = require("../utils/envs.js");

const createPayment = async (data) => {
  try {
    const a = data.redirect;
    const redir = `${CLIENT_URL}${a}`;
    const body = {
      payer_email: "test_user_46945293@testuser.com",
      items: [
        {
          title: "Total",
          description: "FoodExpress mercado pago payment",
          picture_url: "http://www.myapp.com/myimage.jpg",
          category_id: "category123",
          quantity: 1,
          unit_price: data.price,
        },
      ],
      back_urls: {
        failure: `${CLIENT_URL}/denegated`,
        pending: `${CLIENT_URL}/pending`,
        success: redir,
      },
    };

    const payment = await axios.post(API_MERCADO, body, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${TOKEN_MERCADO}`,
      },
    });
    return payment.data;
  } catch (error) {
    throw {
      status: error.status || StatusCodes.INTERNAL_SERVER_ERROR,
      message: error.message || error,
    };
  }
};

module.exports = createPayment;
