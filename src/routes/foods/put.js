const router = require("express").Router();
const { Foods, DietTypes } = require("../../db");
const { ReasonPhrases, StatusCodes } = require("http-status-codes");
const { cloudinary } = require("../../utils/cloudinary");
const { Op } = require("sequelize");

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { name, price, description, rating, image, type, dietTypes, category, offer, onStock } =
    req.body;
    console.log('body',req.body)

  //Cloudinary implementation
  
  
  let loadedImage;
  try {
    if(image) loadedImage = await cloudinary.uploader.upload(image, {upload_preset: 'foodExpress'}).url;
    const selectedFood = await Foods.findOne({where: {id}});
    const update = await Foods.update(
      { name, price, description, rating, image: loadedImage || selectedFood.image  , type, category, offer, onStock },
      { where: { id } }
    );
    
  const findedFood = await Foods.findOne({where: { id }})
  await findedFood.setDietTypes([])
  const dietTypesDb =  await DietTypes.findAll({ where: {name: {[Op.in]: dietTypes}} })
  await findedFood.addDietTypes(dietTypesDb)

    // if (update[0] == 0)
    //   throw {
    //     status: StatusCodes.NOT_MODIFIED,
    //     reason: ReasonPhrases.NOT_MODIFIED,
    //   };
    return res.status(StatusCodes.OK).json({ message: "Updated food" });
  } catch (error) {
    res.status(404).json({ error: error.message});
  }
});

module.exports = router;
