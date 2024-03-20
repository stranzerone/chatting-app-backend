import mongoose from 'mongoose';

const roomSchema = new mongoose.Schema({
  roomID: {
    type: String,
    required: true,
  
  },
  status: {
    type: String,
    enum: ['0', '1'],
  
  },
  username: {
    type: String,
    required: true
  },
  socket:{
    type: String,
    required: true

  }
});

const Room = mongoose.model('Room', roomSchema);
export default Room
