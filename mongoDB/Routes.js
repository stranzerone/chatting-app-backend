import express from 'express'
import Room from './Schema.js'
const route = express.Router()



route.get('/',async(req,res)=>{

    try{

        const response = await Room.find({roomID:"1234"})
      
        res.status(200).json(response)

    }catch(error){
        console.error(error)
    }



})


export default route