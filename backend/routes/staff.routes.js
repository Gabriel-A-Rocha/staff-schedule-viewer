const Staff = require("../models/staff.model");

const getCooks = async (request, reply) => {
  reply.header("Access-Control-Allow-Origin", "*");
  const cooks = await Staff.findOne({ _id: "cooks" });
  return reply.code(200).send(cooks);
};

const getWaiters = async (request, reply) => {
  reply.header("Access-Control-Allow-Origin", "*");
  const waiters = await Staff.findOne({ _id: "waiters" });
  return reply.code(200).send(waiters);
};

const routes = [
  {
    url: "/",
    method: "GET",
    handler: getCooks,
  },
  {
    url: "/GetCooks",
    method: "GET",
    handler: getCooks,
  },
  {
    url: "/GetWaiters",
    method: "GET",
    handler: getWaiters,
  },
];

module.exports = routes;
