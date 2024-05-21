import mongoose from "mongoose";
import "dotenv/config";

mongoose.set("strictQuery", false);

const mongoDB = process.env.DB_URL;

main().catch((err) => console.log(err));
async function main() {
    await mongoose.connect(mongoDB);
}

export default mongoDB;