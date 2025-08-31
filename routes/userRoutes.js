const express = require("express");
const userSignupHandler = require("../controllers/userSignupHandler");
const userLoginHandler = require("../controllers/userLoginHandler");
const userProfileHandler = require("../controllers/userProfileHandler");
const userPasswordHandler = require("../controllers/userPasswordHandler");
const {jwtMiddleware, generateToken} = require("../middlewares/jwt");

const router = express.Router();

router.route('/signup').post(userSignupHandler);

router.route('/login').post(userLoginHandler);

router.route('/profile').get(jwtMiddleware, userProfileHandler);

router.route('/profile/password').put(jwtMiddleware, userPasswordHandler);

module.exports = router;