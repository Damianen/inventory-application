import mongoose from "mongoose";

const Schema = mongoose.Schema;

const CategorySchema = new Schema({
    name: String,
    description: String,
    url: String
});

export default CategorySchema;