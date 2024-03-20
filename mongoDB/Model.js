import Room from "./Schema.js"
import express from 'express'



export const updateUserStatus =async({username, roomID,socket}) =>{
  try {
    // Check if the username exists in the room
    console.log(username,roomID,socket,"KK")
    const existingUser = await Room.findOne({ username, roomID });

    if (!existingUser) {

      // If the username doesn't exist, create a new entry
      await Room.create({ username, roomID, status: 1,socket });
      console.log(`New user ${username} created.`);
    } else {
      // If the username exists, update the status to 1
      await Room.findOneAndUpdate({ username, roomID }, { status: 1,socket:socket });
      console.log(`User ${username} status updated.`);
    }

return 200
  } catch (error) {
    console.error('Error updating user status:', error);
  }
}



export const updateStatus =async({socket}) =>{
    try {
      // Check if the username exists in the room
      console.log(socket,"here is the id")
      const existingUser = await Room.findOneAndUpdate({ socket:socket },{status:"0"});
  if(existingUser){
    console.log("user updated")
  }
  
    } catch (error) {
      console.error('Error updating user status:', error);
    }
  }



export const getAll =async()=>{

    try{

        const response = await Room.find({roomID:"1234",status:'1'})
     

        res.status(200).json(response)

    }catch(error){
        console.error(error)
    }



}
