import mongoose from "mongoose";

const connectMongoDB = async ()=>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log('Database Connected Successfully');
    } catch (error) {
        console.error(`Error Connecting to Database: ${error.message}`);
        process.exit(1);
    }
}

export default connectMongoDB;