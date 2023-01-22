const jwt = require('jsonwebtoken');

function Validator(req, res, next) {
    const { authorization } = req.headers;
    if (authorization) {
        const authToken = authorization.split(" ")[1];
        const authorized = jwt.verify(authToken, process.env.JWT_TOKEN);
        if (authorized) {
            return next();
        } else {
            return res.json({
                message: "Authorization failed"
            })
        }
    } else {
        res.send('Please pass the authentication token in headers to authorize yourself');
    }
}

module.exports = Validator;