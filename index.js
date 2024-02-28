const express = require('express');

//init
const app = express();

//middleware
app.use((req,res,next)=>{
    // your changes here;
    next();
});
//necessary to read body of a req
app.use(express.urlencoded({extended : false}));

app.listen(8000,()=>{console.log("server started")});

