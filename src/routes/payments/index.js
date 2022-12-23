const router = require("express").Router();

const mercadoPayment = require("./mercado.js");
const paypalPayment = require("./paypal.js");

router.use("/mercado", mercadoPayment);
router.use("/paypal", paypalPayment);

module.exports = router;