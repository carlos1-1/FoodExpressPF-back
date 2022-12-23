const router = require("express").Router();

const getFavorites = require("./get.js");
const deleteFavorites = require("./delete.js");
const putFavorites = require("./put.js");

router.use("/get", getFavorites);
router.use("/delete", deleteFavorites);
router.use("/put", putFavorites);

module.exports = router;