const mongoose = require("mongoose");
const schema = mongoose.Schema;

const shopSchema = new schema({
    name:{
        type: String,
        required: true
    },
    id:{
        type: String,
        required: true
    }
},{timestamps: true});

const Shop = mongoose.model('shop', shopSchema);
module.exports = Shop;