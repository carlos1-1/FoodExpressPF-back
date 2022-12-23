const { StatusCodes } = require("http-status-codes");
const { Foods, Reviews, DietTypes } = require("../db");

const getFoodsByFilters = async ({ id, name, dietTypes, offer, sortby, asc }) => {
  try {
    const allFoods = await Foods.findAll({include: [Reviews, {
      model: DietTypes,
      attributes: ['name'],
      through:{
          attributes:[]
      }
  }]
});

    let filteredFoods = [...allFoods];
    if (!!id) {
      const foundFood = allFoods.find((food) => food.id == id);
      return [foundFood];
    }

    if (!!name)
      filteredFoods = filteredFoods.filter((food) => {
        const foodName = food.name.toUpperCase();
        return foodName.includes(name.toUpperCase());
      });


      if (!!dietTypes){
        filteredFoods = filteredFoods.filter((food) =>{
          const mappedFoods = food.dataValues.dietTypes.map(e=>
          e.dataValues.name)

          // return mappedFoods.includes(dietType)
          for (const i of mappedFoods) {
            if(dietTypes.split(',').includes(i))return true
          }
          return false
        })
      };

    switch (offer) {
      case "yes":
        filteredFoods = filteredFoods.filter((food) => food.offer);
        break;
      case "no":
        filteredFoods = filteredFoods.filter((food) => !food.offer);
      // case default: all
    }

    switch (sortby) {
      case "price":
        filteredFoods = filteredFoods.sort((a,b) => a.price - b.price);
        break;
      case "rating":
        filteredFoods = filteredFoods.sort((a, b) => a.rating - b.rating);
        break;
      default: // name
        filteredFoods = filteredFoods.sort((a, b) =>
          a.name.toUpperCase() > b.name.toUpperCase() ? 1 : -1
        );
    }

    if (!asc) filteredFoods = filteredFoods.reverse();

    return filteredFoods;
  } catch (error) {
    throw {
      status: error.status || StatusCodes.BAD_REQUEST,
      reason: error.reason || error,
    };
  }
};

module.exports = getFoodsByFilters;
