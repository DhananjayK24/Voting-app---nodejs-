const asyncHandler = require("express-async-handler");
const User = require("../models/users");

const userProfileHandler = asyncHandler(async (req, res) => {
    const userData = req.user;
    const userId = userData.id;

    const user = await User.findById(userId);

    res.status(200).json({user});
});

module.exports = userProfileHandler;