const express = require("express");
const connectDb = require("./src/config/db");
const cors = require("cors");

//Create server
const app = express();

//Connect mongodb
connectDb();

app.use(express.json({ extended: true }));
app.use(cors());

const port = process.env.port || 3001;

app.listen(port, () => {
  console.log(`On server listener port ${port}`);
});
