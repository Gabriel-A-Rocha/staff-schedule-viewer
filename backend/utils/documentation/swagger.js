//fastify.register(require("@fastify/swagger"), swaggerOptions);

const swaggerOptions = {
  routePrefix: "/documentation",
  exposeRoute: true,
  swagger: {
    info: {
      title: "Staff Schedule Viewer API",
      description: "API to fetch Cooks and Waiters weekly schedules",
      version: "0.0.1",
    },
  },
  host: "localhost",
  port: 3000,
  schemas: ["http"],
  consumes: ["application/json"],
  produces: ["application/json"],
};

module.exports = swaggerOptions;
