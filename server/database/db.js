import mongoose from "mongoose";

const Connection = async (username, password) => {
    const URL = `mongodb://${username}:${password}@blog-app-shard-00-00.p3t4d.mongodb.net:27017,blog-app-shard-00-01.p3t4d.mongodb.net:27017,blog-app-shard-00-02.p3t4d.mongodb.net:27017/?replicaSet=atlas-ut9e1x-shard-0&ssl=true&authSource=admin&retryWrites=true&w=majority&appName=blog-app`;
    try {
        await mongoose.connect(URL)
        console.log("\nDatabase connected successfully");
    } catch (error) {
        console.error("Error occurred while connecting to the database:", error.message);
        console.error(error.stack);
    }
};

export default Connection;
