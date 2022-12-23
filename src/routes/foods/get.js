const router = require("express").Router();
const { ReasonPhrases, StatusCodes } = require("http-status-codes");
const getFoodsByFilters = require("../../controllers/getFoodsByFilters.js");

router.get("/", async (req, res) => {
  const filters = req.query;

  try {
    const foods = await getFoodsByFilters(filters);

    if(!foods.length) throw {
      status: StatusCodes.NOT_FOUND,
      reason: ReasonPhrases.NOT_FOUND,
    };
    
    return res
      .status(StatusCodes.OK)
      .send(foods)
    ;

  } catch (error) {
    return res
      .status(error.status || StatusCodes.BAD_REQUEST)
      .send(error.reason || error)
    ;
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    
    const foods = await getFoodsByFilters({id});

    if(!foods.length) throw {
      status: StatusCodes.NOT_FOUND,
      reason: ReasonPhrases.NOT_FOUND,
    };

    return res
      .status(StatusCodes.OK)
      .send(foods[0])
    ;

  } catch (error) {
    return res
      .status(error.status || StatusCodes.BAD_REQUEST)
      .send(error.reason || error)
    ;
  }
});

module.exports = router;