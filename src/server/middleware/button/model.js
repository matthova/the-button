const Sequelize = require('sequelize');

module.exports = async (app) => {
  // Define the model for a job
  const Button = await app.context.db.define('Button', {
    lastPushed: Sequelize.INTEGER,
  });

  // Update the database tables to contain 'Button'
  await app.context.db.sync({ force: true });
  return Button;
};
