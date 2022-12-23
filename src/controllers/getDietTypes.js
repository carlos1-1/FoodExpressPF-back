const { DietTypes } = require("../db");

const getTypes= async ()=>{

  try {
    const types = await DietTypes.findAll()
    return types
    
  } catch (error) {
    throw({reason: error.reason, status: error.status});
  }
}

module.exports = getTypes;