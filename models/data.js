const mongoose = require("mongoose");
const schema = mongoose.Schema;

const nameidSchema = new schema({
    name:{
        type: String,
        required: true
    },
    id:{
        type: String,
        required: true
    }
},{timestamps: true});

const Shop = mongoose.model('shop', nameidSchema);
module.exports = Shop;