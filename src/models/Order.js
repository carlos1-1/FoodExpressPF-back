const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("order", {
    coments: {
      type: DataTypes.TEXT,
    },
    state: {
      type: DataTypes.ENUM("inProcces", "done", "onTravel"),
      defaultValue: "inProcces",
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    total: {
      type: DataTypes.FLOAT,
    },
    FoodsToOrder: {
      type: DataTypes.ARRAY(DataTypes.UUID),
      allowNull: false,
    },
  });
};
