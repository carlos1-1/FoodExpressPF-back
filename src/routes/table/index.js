const router = require("express").Router();

const { route } = require("./get.js");
const getTable = require("./get.js");
const postTable = require("./post.js");
const putTable = require("./put.js");
const deleteTable = require("./delete.js");

router.use("/", getTable);
router.use("/", postTable);
router.use("/", putTable);
router.use("/", deleteTable);

module.exports = router;
