import mongoose from "mongoose";

// console.log(process.env.DATABASE_URL)
 
const connectDb = async () =>{
    try {
        const databaseInstance = await mongoose.connect(process.env.DATABASE_URL)       
        console.log(`Database is conneted at the host: ${databaseInstance.connection.host}`)
    } catch (error) {
        console.log("Hey some error occured", error)
        process.exit(1)
    }
}

export default connectDb
