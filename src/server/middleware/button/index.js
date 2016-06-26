const router = require(`koa-router`)();
const buttonModel = require(`./model`);
const buttonRoutes = require(`./routes`);

/**
 * This is a Button class representing a server side instance for a button
 */
class Button {
  /**
   * A button server class
   * @param {Object} app - The parent Koa app.
   * @param {string} routeEndpoint - The relative endpoint.
   */
  constructor(app, routeEndpoint) {
    app.context.button = app; // External app reference variable

    this.app = app;
    this.logger = app.context.logger;
    this.routeEndpoint = routeEndpoint;
    this.router = router;

    this.lastPushed = undefined;
  }

/*******************************************************************************
 * Initialization functions
 ******************************************************************************/
  /**
   * initialize the Button endpoint
   */
  async initialize() {
    try {
      await this.loadModel();
      await this.setupRouter();
      this.logger.info(`Button instance initialized`);
    } catch (ex) {
      this.logger.error(`Button initialization error`, ex);
    }
  }

  async loadModel() {
    this.ButtonModel = await buttonModel(this.app);
  }

  /**
   * Set up the button's instance's router
   */
  setupRouter() {
    try {
      // Populate this.router with all routes
      // Then register all routes with the app
      buttonRoutes(this);
      // Register all router routes with the app
      this.app.use(this.router.routes()).use(this.router.allowedMethods());
      this.logger.info(`Button router setup complete`);
    } catch (ex) {
      this.logger.error(`Button router setup error`, ex);
    }
  }

/*******************************************************************************
 * Core functions
 ******************************************************************************/
  getTimeSinceButtonPushed() {
    const currentTime = new Date().getTime();
    const timeSinceButtonPushed = currentTime - this.lastPushed;
    return timeSinceButtonPushed;
  }

  updateTime() {
    this.lastPushed = new Date().getTime();
  }
}

module.exports = Button;
