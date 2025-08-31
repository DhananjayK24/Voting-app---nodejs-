const express = require("express");
const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler")

const jwtMiddleware = asyncHandler(async (req, res, next) => {
    let token;
    const authHeader = req.headers.authorization || req.headers.Authorization;
    
    if(authHeader && authHeader.startsWith("bearer")){
        token = authHeader.split(" ")[1];

        jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decoded)=>{
            if(err){
                res.status(401);
                throw new Error("User is not authorized!");
            }
            console.log(decoded);

            req.user = decoded;
            next();
        });
    }
});

const generateToken = asyncHandler(async (userData) => {
    return jwt.sign(userData, process.env.JWT_SECRET_KEY, {expiresIn: "1m"})
});

module.exports = {jwtMiddleware, generateToken};