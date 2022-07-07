const express = require('express');
const chalk = require('chalk')
const debug= require('debug')('app');
const morgan= require('morgan');

const app = express();
const port = 3000;

app.use(morgan('combined'));

app.get("/", (req,res) => {

    res.send('Hello borntoDev155555555');    
})


app.listen(port,()=>{

    //console.log("Listening on port" + chalk.red(port));
    debug("Listening on port" + chalk.red(port));
})