const router = require("express").Router();

const foodsRoute = require("./foods/index.js");
const userRoute = require("./user/index.js");
const favoritesRoute = require("./favorites/index.js");
const sendEmailRoute = require("./send-email/index.js");
const paymentsRoute = require("./payments/index.js");
const ordersRoute = require("./Order/index.js");
const reviewsRoute = require("./reviews/index.js");
const tableRoute = require("./table/index.js");
const dietTypesRoute = require("./dietTypes/index");
const numerTable = require("./numberOfTables/index.js");

router.use("/foods", foodsRoute);
router.use("/user", userRoute);
router.use("/favorites", favoritesRoute);
router.use("/send-email", sendEmailRoute);
router.use("/payments", paymentsRoute);
router.use("/orders", ordersRoute);
router.use("/reviews", reviewsRoute);
router.use("/tables", tableRoute);
router.use("/types", dietTypesRoute);
router.use("/number", numerTable);
module.exports = router;
