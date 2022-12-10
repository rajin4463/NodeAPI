require("dotenv").config();
const mongoose = require("mongoose");
const express = require('express');
const search = require('./models/data');

const app = express();

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

function find(parm, findObj){
    search.find({name: "tony", id:8909}, (error, data)=>{
        if(error){
            console.log(error);
        }else{
            console.log(data);
        }
    });
}

find('id', 87);