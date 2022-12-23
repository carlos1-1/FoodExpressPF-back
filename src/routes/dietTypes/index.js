const router = require("express").Router();

const getDietTypes = require("./get.js");
const postDietTypes = require("./post.js");
const deleteDietTypes = require("./delete.js")

router.use("/", getDietTypes);
router.use("/", postDietTypes);
router.use("/delete", deleteDietTypes);


module.exports = router;