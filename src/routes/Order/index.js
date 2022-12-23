const router = require("express").Router();

const getOrders = require("./get.js");
const postOrders = require("./post.js");
const putOrders = require("./put.js");
const deleteOrders = require("./delete.js");

router.use("/", getOrders);
router.use("/create", postOrders);
router.use("/", putOrders);
router.use("/", deleteOrders);

module.exports = router;
