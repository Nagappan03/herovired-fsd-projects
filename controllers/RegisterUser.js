const { UserModel } = require('../models/UserSchema');
const { generateHash, generateSalt } = require("../utils/PasswordEncryption");

function RegisterUser(req, res) {
    let username = req.body.username;
    let email = req.body.email;
    let password = req.body.password;

    const salt = generateSalt();
    const hashedPassword = generateHash(password, salt);

    let userData = {
        username: username,
        email: email,
        password: password,
        encryptedPassword: hashedPassword
    }

    let result = new UserModel(userData);
    result.save().then(() => {
        res.send("Details saved in DB successfully");
    }).catch((err) => {
        res.send("Could not save the data into DB");
    })
}

module.exports = RegisterUser;