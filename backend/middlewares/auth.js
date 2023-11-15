import User from "../models/User.js";
import jwt from "jsonwebtoken";
import JWT_SECRET from "../models/User.js";


const isAuthenticated = async (req, res, next) => {
    try {
      const { token } = req.cookies;
  
      if (!token) {
        return res.status(401).json({
          message: "Please login first",
        });
      }
  
      const decoded = await jwt.verify(token, JWT_SECRET);
  
      req.user = await User.findById(decoded._id);
  
      next();
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  };

export default isAuthenticated;