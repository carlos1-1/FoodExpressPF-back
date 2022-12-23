const { StatusCodes } = require("http-status-codes");
const { cloudinary } = require("../utils/cloudinary");
const { Foods, DietTypes } = require("../db");
const { Op } = require("sequelize");

const postFood = async ({
  name,
  price,
  description,
  rating,
  image,
  type,
  category,
  offer,
  dietTypes
}) => {
  
  try {

    if(!name || !price || !description || !image || !type || !category) throw {
      status: StatusCodes.BAD_REQUEST,
      reason: "Some info is missing",
    };

    const isRepeat = await Foods.findOne({where: {name: name}});
    if(isRepeat) throw {

      status: StatusCodes.CONFLICT,
      reason: "The name entered already exists in the database",
    };

    //Cloudinary implementation
    const loadedImage = await cloudinary.uploader
      .upload(image, {upload_preset: 'foodExpress'});

    const createdFood = await Foods.create({
      name,
      price: parseFloat(price),
      description,
      rating: parseFloat(rating),
      image: loadedImage.url,
      type,
      category,
      offer,
    });

    const dietTypesDb =  await DietTypes.findAll({ where: {name: {[Op.in]: dietTypes}} })

    await createdFood.addDietTypes(dietTypesDb)
    return createdFood

  } catch (error) {
    throw {
      status: error.status || StatusCodes.BAD_REQUEST,
      reason: error.reason || error,
    }
  }
}

module.exports = postFood;