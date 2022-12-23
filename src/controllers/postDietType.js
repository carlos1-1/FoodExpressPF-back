const { StatusCodes } = require("http-status-codes");
const { DietTypes } = require("../db");

const postDietType = async (name)=>{
  try {
    if(!name) throw {
      status: StatusCodes.BAD_REQUEST,
      reason: "You must to send a name",
    };
    const isRepeat = await DietTypes.findOne({where: {name: name}});
    if(isRepeat) throw {

      status: StatusCodes.CONFLICT,
      reason: "The category entered already exists in the database",
    };

    const created = await DietTypes.create({
      name,
    });
    
    return created
    
  } catch (error) {
    throw {
      status: error.status || StatusCodes.BAD_REQUEST,
      reason: error.reason || error,
    }
  }
}

module.exports = postDietType;