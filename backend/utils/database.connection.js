const mongoose = require("mongoose");
const Staff = require("../models/staff.model");
const cooksSchedule = require("./seed/cooks1.json");
const waitersSchedule = require("./seed/waiters1.json");

const connectionStringURI = "mongodb://localhost:27017/staff_schedule_DB";

mongoose
  .connect(connectionStringURI)
  .then(() => {
    console.log("Connected to MongoDB database");
    loadSeedData();
  })
  .catch((err) => {
    console.error(`MongoDB connection failed. Error: ${err.message}.`);
  });

async function loadSeedData() {
  try {
    const cooksFound = await Staff.findOne({ _id: "cooks" });
    if (!cooksFound) {
      const data = new Staff({ _id: "cooks", ...cooksSchedule });
      await data.save();
    }

    const waitersFound = await Staff.findOne({ _id: "waiters" });
    if (!waitersFound) {
      const data = new Staff({ _id: "waiters", ...waitersSchedule });
      await data.save();
    }

    console.log("Seed data uploaded successfully.");
  } catch (error) {
    console.error(`Failed loading seed data. Error: ${error.message}`);
  }
}
