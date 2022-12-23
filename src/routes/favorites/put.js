const router = require("express").Router();
const { Favorites } = require('../../db');
const { StatusCodes } = require("http-status-codes");

router.put("/", async(req,res)=>{
  const { userId, foodId } = req.body;

  try {
    let newFavorite = await Favorites.create({ userId, foodId });
    return res
      .status(StatusCodes.OK)
      .json(newFavorite)
    ;
  } catch (error) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json(error)
    ;
  }
});

module.exports = router;