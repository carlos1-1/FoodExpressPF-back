const server = require('./app.js');
const { conn } = require('./db.js');

const { PORT } = require("./utils/envs.js");

conn.sync({ force: false }).then(() => {
  server.listen(PORT, () => {
    console.log(`%s listening at ${PORT}`); // eslint-disable-line no-console
  });
});