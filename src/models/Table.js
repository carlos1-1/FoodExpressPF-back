const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "table",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      status: {
        type: DataTypes.ENUM(["available", "taken", "reserved"]),
        allowNull: false,
        defaultValue: "available",
      },
      capacity: {
        type: DataTypes.INTEGER,
        validate: { min: 1 },
        allowNull: true,
      },
      reservation_data: {
        type: DataTypes.TEXT,
        allowNull: false,
        defaultValue: "null",
      },
      hour: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      reserve_owner: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },

    {
      timestamps: false,
      freezeTableName: true,
    }
  );
};
