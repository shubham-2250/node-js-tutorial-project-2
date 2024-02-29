// const express = require('express');
const express = require('express');
const logger = require('./controller/logger_controller.js');
const {user_get, user_post, user_patch}  = require('./controller/user_controller.js');

//init

const router = express.Router();

const app = express();
app.use(express.urlencoded({ extended: false }));
//middleware
app.use(logger());



app.route('/user').get(user_get()).post(user_post()).patch(user_patch());
app.listen(8000, () => { console.log("server started http://localhost:8000") });
