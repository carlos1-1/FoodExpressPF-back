require("dotenv").config();

/**********         URLS        ***********/
const CLIENT_URL = process.env.CLIENT_URL || "http://localhost:3000";
const PORT = process.env.PORT || "3001";

/**********        PAYPAL       ***********/
const CLIENT = "AVio_ncA_NfqHRuuZltEsSeAw-eTdIZl6lrnWV7ZCVh-PTd4KqBMMagIBPjX6psV89JCoLxpDb50jQwr";
const SECRET = "EIv0Q_vciHOLgKrHJfPskKlvCqpWC2Yv3U4zk3fMWu5DSRYybxS5HlR3CT4qy1wxs0RI7kuBop_HdEc8";
const AUTH_PAYPAL = { user: CLIENT, pass: SECRET };
const API_PAYPAL = "https://api-m.sandbox.paypal.com"; 

/**********     MERCADO PAGO    ***********/
const TOKEN_MERCADO = process.env.ACCESS_TOKEN;
const API_MERCADO = "https://api.mercadopago.com/checkout/preferences";

ACCESS_TOKEN="TEST-6288787192624842-111519-317756c2bb1a667d0be520b353a3d6e8-1239962089";

module.exports = {
  // URLS
  CLIENT_URL,
  PORT,

  // PAYPAL
  AUTH_PAYPAL,
  API_PAYPAL,

  // MERCADO PAGO
  API_MERCADO,
  TOKEN_MERCADO,
};