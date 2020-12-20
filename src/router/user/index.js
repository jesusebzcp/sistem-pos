const express = require("express");
const router = express.Router();
const usersController = require("../../controllers/userController");
const { check } = require("express-validator");

//Create users
//ENDPOINT=api/users

router.post(
  "/",

  //Validation data
  [
    check("name", "El nombre es obligatorio").not().isEmpty(),
    check("email", "Email invalido").isEmail(),
    check("password", "El password debe ser de mínimo 6 caracteres").isLength({
      min: 6,
    }),
    check("role", "El role es obligatorio").not().isEmpty(),
  ],

  usersController.createUser
);

module.exports = router;
