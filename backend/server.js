import express from "express";
import cookieParser from 'cookie-parser';
import dotenv from "dotenv";
import connectMongoDB from "./db/db.js";
import { v2 as cloudinary } from "cloudinary";

import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/user.js";
import postRoutes from "./routes/post.js";
import notificationRoutes from "./routes/notification.js";


dotenv.config();
cloudinary.config({
	cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
	api_key: process.env.CLOUDINARY_API_KEY,
	api_secret: process.env.CLOUDINARY_API_SECRET,
});

const app = express();
const PORT = process.env.PORT;

app.use(express.json({limit:"2mb"}));

app.use(cookieParser());

app.use("/api/auth",authRoutes);
app.use("/api/users",userRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/notifications", notificationRoutes);


app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
    connectMongoDB();
});

