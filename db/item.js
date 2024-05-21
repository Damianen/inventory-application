import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ItemSchema = new Schema({
    name: String,
    description: String,
    price: Number,
    stock: Number,
    URL: String
});

export default ItemSchema;