const { UserModel } = require("../models/UserSchema");

function ForgotPassword(req, res) {
    let enteredEmail = req.body.email;
    UserModel.findOne({ email: enteredEmail }, function (err, data) {
        if (data) {
            return res.json({
                message: 'Congratulations, You have been authenticated successfully!',
                password: data.password
            });
        } else {
            res.send("Invalid email ID");
        }
    });
}

module.exports = ForgotPassword;