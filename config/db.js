const mongoose = require("mongoose");

//Getting database URI from environment variable
const connectDB = async () => {
  try {
    const dbURI = process.env.MONGODB_URI || "mongodb://localhost:27017/web-dev";
    const conn = await mongoose.connect(dbURI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;
 