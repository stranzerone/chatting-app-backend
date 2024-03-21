import { Server } from 'socket.io';
import {   updateStatus, updateUserStatus } from '../mongoDB/Model.js';


import dotenv from "dotenv";
dotenv.config({ path: ".env" });


const FRONT = process.env.FRONTEND
const FRONT2 = process.env.FRONTEND2

export const setupSocket = (server) => {
    const io = new Server(server, {
       cors: {
         origin: [FRONT,FRONT2],
         credentials: true,
       },
    });




   
  io.on('connection',async (socket) => {

    const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

   

    socket.on("join_room",async(data)=>{


  socket.join(data.room)
 updateUserStatus({username:data.username,roomID:data.room,socket:socket.id})



socket.broadcast.emit('users_joined',{message:"hello"})

   

 




      socket.on('send_message',(message)=>{






        socket.to(data.room).emit('receive_message', {content:message.content,room:false,time:currentTime,sender:message.sender}); // Sending message to all clients in the same room
   
      })
    })



socket.on("message",(data)=>{

  socket.to(data.socketId).emit('oneMessage',{content:data.content,room:false,sender:data.sender,time:currentTime})
})





  socket.on('disconnect',() =>{
      updateStatus({socket:socket.id})
      socket.broadcast.emit('users_joined',{message:"hello"})

    

    }
    
    
    )

  
  }
  
  
  
  
  
  );


}