import mongoose from 'mongoose';

const connectMongo = async () => {
    mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");
}

export default connectMongo;
