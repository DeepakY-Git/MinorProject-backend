import express from "express";
const app = express();

import cookieParser from "cookie-parser";

import path from "path";


if (process.env.NODE_ENV !== "production") {
  require("dotenv").config({ path: "backend/config/config.env" });
}

// Using Middlewares
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(cookieParser());

// Importing Routes
import post from "./routes/post.js";
import user from "./routes/user.js";

// Using Routes
app.use("/api/v1", post);
app.use("/api/v1", user);



app.use(express.static(path.join(Frontend, "../frontend/build")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(Frontend, "../frontend/build/index.html"));
});


export default app;