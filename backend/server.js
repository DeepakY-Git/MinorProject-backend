import app from "./app.js";
import connectDatabase from "./config/database.js";

// const cloudinary = require("cloudinary");

connectDatabase();

// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// });

// app.listen(process.env.PORT, () => {
//   console.log(`Server is running on port ${process.env.PORT}`);
// });

app.listen(4000, () => {
  console.log("Server is running on port 4000");
})