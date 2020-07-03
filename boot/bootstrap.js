require('dotenv').config();
const cookieParser = require('cookie-parser');
const session = require('express-session')

module.exports = (app) => {
    app.use(cookieParser());
    app.use(session({
        secret: 'keyboard cat',
        resave: false,
        saveUninitialized: true,
        cookie: { secure: true }
    }))
}