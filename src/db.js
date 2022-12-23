require("dotenv").config();
const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/food_express?ssl=true`,
  {
    logging: false, // set to console.log to see the raw SQL queries
    native: false, // lets Sequelize know we can use pg-native for ~30% more speed
  }
);
const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, "/models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "/models", file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach((model) => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

const { Foods, Reviews, User, Table, Order, DietTypes, NumberOfTables } =
  sequelize.models;

Order.belongsTo(User);
User.hasMany(Order);

Order.belongsToMany(Foods, { through: "Foods_Order" });
Foods.belongsToMany(Order, { through: "Foods_Order" });

Reviews.belongsTo(Foods, { through: "Food_Review" });
Foods.belongsToMany(Reviews, { through: "Food_Review" });
User.hasMany(Reviews);
Reviews.belongsTo(User);

Foods.belongsToMany(User, { through: "Favorites" });
User.belongsToMany(Foods, { through: "Favorites" });

Table.belongsToMany(Foods, { through: "Table-Food" });
Foods.belongsToMany(Table, { through: "Table-Food" });

Foods.belongsToMany(DietTypes, { through: "Foods_DietTypes" });
DietTypes.belongsToMany(Foods, { through: "Foods_DietTypes" });

NumberOfTables.belongsToMany(Table, { through: "Table_Number" });
Table.belongsToMany(NumberOfTables, { through: "Table_Number" });

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize, // para importart la conexión { conn } = require('./db.js');
};
