const express = require('express');
const AuthRouter = express.Router();

const RegisterUser = require('../controllers/RegisterUser');
const LoginUser = require('../controllers/LoginUser');
const ForgotPassword = require('../controllers/ForgotPassword');
const Validator = require('../utils/Validator');

AuthRouter.post('/register', RegisterUser);
AuthRouter.post('/login', LoginUser);
AuthRouter.post('/forgotpassword', Validator, ForgotPassword);

module.exports = AuthRouter;