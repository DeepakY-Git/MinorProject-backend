import mongoose from "mongoose";

const DB_URL = 'mongodb+srv://dummy:dummy123@cluster0.ycthzlw.mongodb.net/?retryWrites=true&w=majority';

const connectDatabase = () => {
  mongoose
    .connect(DB_URL)
    .then((con) => console.log("Database Connected"))
    .catch((err) => console.log(err));
  // .connect(process.env.MONGO_URI)
  // .then((con) => console.log(`Database Connected: ${con.connection.host}`))

};

export default connectDatabase;