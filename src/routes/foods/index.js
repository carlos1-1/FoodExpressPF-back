const router = require("express").Router();

const getFoods = require("./get.js");
const postFoods = require("./post.js");
const putFoods = require("./put.js");
const deleteFoods = require("./delete.js");

router.use("/", getFoods);
router.use("/create", postFoods);
router.use("/", putFoods);
router.use("/", deleteFoods);

module.exports = router;
