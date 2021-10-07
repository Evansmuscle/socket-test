import dotenv from "dotenv";
dotenv.config();

import app from "./app";
import connectToDB from "./db";

const PORT = process.env.PORT || 3000;

connectToDB();
app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});
