const Response = require(`../helpers/response`);

/**
 * Handle all logic at this endpoint for reading all of the jobs
 */
const getTime = (self) => {
  const requestDescription = `Get time since button pushed`;
  self.router.get(`${self.routeEndpoint}/`, async (ctx) => {
    try {
      const reply = self.getTimeSinceButtonPushed();
      ctx.status = 200;
      ctx.body = new Response(ctx, requestDescription, reply);
    } catch (ex) {
      ctx.status = 500;
      ctx.body = new Response(ctx, requestDescription, ex);
      self.logger.error(ex);
    }
  });
};

/**
 * Handle all logic at this endpoint for reading all of the jobs
 */
const resetTime = (self) => {
  const requestDescription = `Update Time`;
  self.router.post(`${self.routeEndpoint}/`, async (ctx) => {
    try {
      const reply = await self.resetTime();
      ctx.status = 200;
      ctx.body = new Response(ctx, requestDescription, reply);
    } catch (ex) {
      ctx.status = 500;
      ctx.body = new Response(ctx, requestDescription, ex);
      self.logger.error(ex);
    }
  });
};

const clockRoutes = (self) => {
  getTime(self);
  resetTime(self);
};

module.exports = clockRoutes;
