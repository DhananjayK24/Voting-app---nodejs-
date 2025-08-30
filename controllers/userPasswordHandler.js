const asyncHandler = require("express-async-handler");
const User = require("../models/users");

const userPasswordHandler = asyncHandler(async (req, res) => {
    const userId = req.user;
    const {currentPassword, newPassword} = req.body;

    const user = await User.findByID(userId);

    if(!await user.comparePassword(currentPassword)){
        res.status(401).json({error: "Invalid user or password"});
    }

    user.password = newPassword;
    await user.save();

    console.log("Password changed!")

    res.status(200).json({message: "Password updated!"});
});

module.exports = userPasswordHandler;