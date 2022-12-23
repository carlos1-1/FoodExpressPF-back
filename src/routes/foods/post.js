const router = require("express").Router();
const { StatusCodes } = require("http-status-codes");
const postFood = require("../../controllers/postFood.js");
const {Foods} = require('../../db.js'); 

router.post("/", async (req, res) => {
  const { type_user } = req.body;
  const foodInfo = req.body;

  try {
    if(type_user !== "admin") throw {
      status: StatusCodes.UNAUTHORIZED,
      reason: "Function only enabled for administrators",
    }

    await postFood(foodInfo);

    return res
      .status(StatusCodes.CREATED)
      .send({message: "Food succesfully created!"})
    ;
  } catch (error) {
    return res
      .status(error.status || StatusCodes.BAD_REQUEST)
      .send(error.reason || error)
    ;
  }
});

router.post('/bulkpost',async (req, res)=>{
    const {arrFoods} = req.body;
    try {
      let foods = await Foods.bulkCreate(arrFoods);
      res.status(200).json({foods: foods, msg: "Created Ok"});
    } catch (error) {
      res.status(404).json(error);
    }
});

module.exports = router;