const asyncHandler = require("express-async-handler");
const User = require("../models/users");
const {jwtMiddleware, generateToken} = require("../middlewares/jwt");

const userSignupHandler = asyncHandler(async (req, res) => {
    const data = req.body;

    const newUser = new User(data);

    const response = await newUser.save();
    console.log("User saved!")

    const payload = {
        id: response.id,
    };

    const token = await generateToken(payload);
    console.log("Token is: ", token);

    res.status(200).json({response: response, token: token});

});

module.exports = userSignupHandler;