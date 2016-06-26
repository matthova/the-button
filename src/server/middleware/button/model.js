const Sequelize = require('sequelize');

module.exports = async (app) => {
  // Define the model for a job
  const Button = await app.context.db.define('Button', {
    lastPushed: Sequelize.BIGINT,
  });

  // Update the database tables to contain 'Button'
  await app.context.db.sync();
  return Button;
};
