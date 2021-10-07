import mongoose from "mongoose";

const connectToDB = () => {
  const uri = process.env.MONGO_URI;

  if (uri) {
    mongoose.connect(uri, {}, () => {
      console.log("Connected to DB");
    });
  }
};

export default connectToDB;
