const app = require('./src/app');
const { sequelize } = require('./src/db');
require('dotenv').config();

const PORT = process.env.PORT;

sequelize.sync({force: false}).then(() => {
  console.log('Connected to Database');
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}).catch(error => {
  console.error('Unable to connect to the database:', error);
});