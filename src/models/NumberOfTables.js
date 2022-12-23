const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("NumberOfTables", {
    capacity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
};
