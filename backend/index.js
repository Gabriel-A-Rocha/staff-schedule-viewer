const fastify = require("fastify")({
  logger: true,
});

require("./utils/database.connection");

const routes = require("./routes/staff.routes");

routes.forEach((route) => {
  fastify.route(route);
});

const start = async () => {
  try {
    await fastify.listen({ port: 3000 });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
