const express = require("express");
const connectDb = require("./src/config/db");
const cors = require("cors");

//Create server
const app = express();

//Connect mongodb
connectDb();

app.use(express.json({ extended: true }));
app.use(cors());

//Create user
app.use("/api/create-user", require("./src/router/user"));
app.use("/api/login", require("./src/router/auth"));

app.listen(process.env.PORT || 4000, "0.0.0.0", () => {
  console.log(`On server listener port ${process.env.PORT}`);
});
