const router = require("express").Router();
const { Favorites } = require('../../db');
const { StatusCodes } = require("http-status-codes");

router.delete("/", async(req, res)=>{
  const { foodId } = req.body;

  try {
    const deletedFoodFromFavorites = await Favorites.destroy({where: { foodId }});
    return res
      .status(StatusCodes.OK)
      .json(deletedFoodFromFavorites)
    ;
  } catch (error) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json(error)
    ;
  }
});

module.exports = router;