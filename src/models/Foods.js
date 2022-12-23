const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("foods", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rating: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    image: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    type: {
      type: DataTypes.ENUM(
        "Gluten Free",
        "Vegetarian",
        "Vegan",
        "Protein",
        "Others"
      ),
      allowNull: false,
    },
    category: {
      type: DataTypes.ENUM(
        "Main Course",
        "Appetizer",
        "Salad",
        "Dessert",
        "Beverage"
      ),
      allowNull: false,
    },
    offer: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    onStock: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }
  });
};
