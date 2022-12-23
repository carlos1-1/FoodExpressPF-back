const router = require("express").Router();

const getUser = require("./get.js");
const deleteUser = require("./delete.js");
const postUser = require("./post.js");
const updateUser = require("./update.js");

router.use("/", getUser);
router.use("/delete", deleteUser);
router.use("/create", postUser);
router.use("/update", updateUser);

module.exports = router;