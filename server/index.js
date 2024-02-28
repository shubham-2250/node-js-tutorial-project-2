// const express = require('express');
import express from 'express';
import fs from 'fs';
import { logger } from './controller/logger_controller.js';
import {user_get, user_post, user_patch} from './controller/user_controller.js';

//init

const router = express.Router();

const app = express();

//middleware
app.use(
logger()
);

app.route('/user').get(user_get).post(user_post).patch(user_patch);
// app.get('/userweqwe',()=>console.log("hello"));
// app.post('/userqweweq')
//necessary to read body of a req
app.use(express.urlencoded({extended : false}));

app.listen(8000,()=>{console.log("server started http://localhost:8000")});