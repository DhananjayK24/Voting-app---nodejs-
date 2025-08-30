const asyncHandler = require("express-async-handler");
const User = require("../models/users");
const {jwtMiddleware, generateToken} = require("../middlewares/jwt");

const userLoginHandler = asyncHandler(async (req, res) => {
    const {aadharCardNumber, password} = req.body;

    const user = await User.findOne({aadharCardNumber: aadharCardNumber});

    if(!user || !user.comparePassword(password)){
        res.status(401).json({error: "Invalid username or password!"});
    }

    const payload = {
        id: user.id,
        username: user.username
    }

    const token = generateToken(payload);

    res.json({token});
});

module.exports = userLoginHandler;