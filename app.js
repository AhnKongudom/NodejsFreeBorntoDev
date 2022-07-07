const express = require('express');
const chalk = require('chalk')
const debug= require('debug')('app');
const morgan= require('morgan');
const path= require('path');
const productRouter = express.Router();

const app = express();
const PORT = process.env.PORT || 4000; 

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname,"/public/")));

app.set("views", "./src/views");
app.set("view engine", "ejs");

//app.get("/", (req,res) => {

   // res.send('Hello borntoDev155555555');    
//})

productRouter.route("/").get((req,res) =>{
    res.send("Hello World !! I'm Products");
});

productRouter.route("/1").get((req,res) =>{
    res.send("Hello World !! I'm Products1");
});

app.use("/products", productRouter)

app.get("/", (req,res) => {

    res.render('index',{username: 'Ahnnnn', customer:["ahn","katai","mom"]});    
})

app.listen(PORT,()=>{

    //console.log("Listening on port" + chalk.red(port));
    debug("Listening on port" + chalk.red(PORT));
})