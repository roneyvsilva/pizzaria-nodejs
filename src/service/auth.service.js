const Usuario = require("../model/Usuario");
const jwt = require("jsonwebtoken");

const loginService = (email) => Usuario.findOne({ email: email }).select("senha");
const generateToken = (userId) => jwt.sign({ id: userId }, process.env.SECRET, { expiresIn: "1d" });


module.exports = {
    loginService,
    generateToken
}
