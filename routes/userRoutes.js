const express = require("express");
const userSignupHandler = require("../controllers/userSignupHandler");
const userLoginHandler = require("../controllers/userLoginHandler");
const userProfileHandler = require("../controllers/userProfileHandler");
const userPasswordHandler = require("../controllers/userPasswordHandler");
const {jwtMiddleware, generateToken} = require("../middlewares/jwt");

const router = express.Router();

router.post('/signup', userSignupHandler);

router.post('/login', userLoginHandler);

router.get('/profile', jwtMiddleware, userProfileHandler);

router.put('/profile/password', jwtMiddleware, userPasswordHandler);