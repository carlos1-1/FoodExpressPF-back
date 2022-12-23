const router = require("express").Router();
const { Foods, User} = require('../../db');
const { StatusCodes } = require("http-status-codes");

router.get("/", async(req, res)=>{
  const { userId } = req.body;
  
  try {
    const favorites = await User.findOne({ where: {id: userId}, include: Foods });
    return res
      .status(StatusCodes.OK)
      .json(favorites.foods)
    ;
  } catch (error) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json(error)
      ;
  }
});

module.exports = router;