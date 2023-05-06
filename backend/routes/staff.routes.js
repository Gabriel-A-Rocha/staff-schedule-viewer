const Staff = require("../models/staff.model");

const routes = [
  {
    url: "/GetCooks",
    method: "GET",
    handler: async (request, reply) => {
      reply.header("Access-Control-Allow-Origin", "*");
      const cooks = await Staff.findOne({ _id: "cooks" });
      return reply.code(200).send(cooks);
    },
  },
  {
    url: "/GetWaiters",
    method: "GET",
    handler: async (request, reply) => {
      reply.header("Access-Control-Allow-Origin", "*");
      const waiters = await Staff.findOne({ _id: "waiters" });
      return reply.code(200).send(waiters);
    },
  },
];

module.exports = routes;
