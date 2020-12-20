const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const authController = require("../../controllers/authController");
const validateToken = require("../../middleware/jwt");

//Auth user
//ENDPOINT=api/auth

router.post(
  "/",

  //Validation data
  [
    check("email", "Agrega un email validado").isEmail(),
    check("password", "El password debe ser de mínimo 6 caracteres").isLength({
      min: 6,
    }),
  ],

  authController.authUser
);

//Return data user
router.get("/", validateToken, authController.login);
module.exports = router;
