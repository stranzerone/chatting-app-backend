import mongoose from "mongoose";


import dotenv from "dotenv";
dotenv.config({ path: ".env" });


 const Connections = async  () => {
    const URL = process.env.DATABASE
    try{
    await  mongoose.connect(URL).then(
        console.log("database connected")
    )


    } catch (err) {
        console.log("error while loding database",err)
    }

}

export default Connections;