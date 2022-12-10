require("dotenv").config();
const mongoose = require("mongoose");
mongoose.set('strictQuery', false);
const express = require('express');
const Shop = require('./models/data');

const app = express();

let reply = {};

const PATH = process.env.SHOPPATH;
const PORT = process.env.PORT;

app.listen(PORT);

async function connect() {
    try {
        await mongoose.connect(PATH)
        console.log('connected to database');
    }catch(error){
        console.error(error);
    }
}

connect();

async function addData(usrname, usrid){
    const shop = new Shop({
        name: usrname,
        id: usrid
    });
    shop.save();
    let rep = Object.assign(reply, {
        name: usrname,
        id: usrid,
        operation: "Sucess"
    });
}

module.exports = {addData, reply}