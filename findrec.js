require("dotenv").config();
const mongoose = require("mongoose");
mongoose.set('strictQuery', false);
const express = require('express');
const shop = require('./models/data');

const app = express();

let reply = {};

const PATH = process.env.SHOPPATH;
const PORT = process.env.PORT;

app.listen(PORT);

async function connect() {
    try {
        await mongoose.connect(PATH)
        console.log('Connected to database...');
    }catch(error){
        console.error(error);
    }
}

connect();

async function find({parm1},{parm2}){
    await shop.find({parm1},null,{parm2}, (error, data)=>{
        if(error){
            console.log(error);
        }else{
            console.log(data);
            let rep = Object.assign(reply, {data});
        }
    });
}

find({name: 'Same'}, {id: 5050157})