const { DataTypes } = require("sequelize");


module.exports = (sequelize) => {
  sequelize.define("user", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [2]
      }
    },
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false
    },
    email: {
      type: DataTypes.TEXT,
      unique: true,
      allowNull: false,
      validate: {
        len: [5]
      }
    },
    direction: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    number_phone: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    banned: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    type_user: {
      type: DataTypes.ENUM("Admin", "Client"),
      allowNull: false,
    },
  }
  ,{
    paranoid: true,
    timestamps: true
  }
  );
};
