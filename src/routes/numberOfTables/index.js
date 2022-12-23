const router = require("express").Router();

const get = require("./get.js");
const post = require("./post.js");
const put = require("./put.js");
const deleteNumber = require("./delete.js");

router.use("/", get);
router.use("/", post);
router.use("/", deleteNumber);
router.use("/", put);

module.exports = router;
