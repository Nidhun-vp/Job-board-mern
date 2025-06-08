const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const jobRoutes = require("./Routes/jobs");

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use("/jobs", jobRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

app.get("/", (_, res) => res.send("API is running"));

module.exports = app; 
