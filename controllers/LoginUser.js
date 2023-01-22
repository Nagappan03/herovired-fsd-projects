const { UserModel } = require("../models/UserSchema");
const { comparePasswords } = require("../utils/PasswordEncryption");
const jwt = require('jsonwebtoken');

function LoginUser(req, res) {
    let enteredEmail = req.body.email;
    let enteredPassword = req.body.password;
    UserModel.findOne({ email: enteredEmail }, function (err, data) {
        if (data) {
            const passwordIsMatched = comparePasswords(enteredPassword, data.encryptedPassword);
            if (passwordIsMatched) {
                let token = jwt.sign({ enteredEmail }, process.env.JWT_TOKEN, { expiresIn: '15m' });
                return res.json({
                    message: "Login Successful!!",
                    token: token
                })
            } else {
                res.send("Invalid password")
            }
        } else {
            res.send("Invalid credentials");
        }
    });
}

module.exports = LoginUser;