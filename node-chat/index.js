// const express = require('express')
// const cors= require('cors')
// const Pusher = require("pusher");

// const pusher = new Pusher({
//   appId: "1797907",
//   key: "db9e9cd7a132c8a17973",
//   secret: "8f28824b399c3f4c22e8",
//   cluster: "ap2",
//   useTLS: true
// });

// const app = express();

// app.use(cors({
//     origin:['http://localhost:3000','http://localhost:8080','http://localhost:4200']
// }))

// app.use(express.json())

// app.post('/api/messages', async(req,res)=>{
//     await pusher.trigger("chat", "message", {
//         username:req.body.username,
//         message: req.body.message
//       });
//       res.json({body:[]});
// })

// console.log('listening to port 8000')
// app.listen(8000)


require('dotenv').config();

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Pusher = require('pusher');

const pusher = new Pusher({
  appId: '1797907',
  key: 'db9e9cd7a132c8a17973',
  secret: '8f28824b399c3f4c22e8',
  cluster: 'ap2',
  useTLS: true
});

const app = express();

app.use(cors({
  origin: ['http://localhost:3000', 'http://localhost:8080', 'http://localhost:4200']
}));

app.use(express.json());

mongoose.connect(`mongodb+srv://Javeria:Javeria123@cluster0.rtgaihc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

const messageSchema = new mongoose.Schema({
  username: String,
  message: String
});

const Message = mongoose.model('Message', messageSchema);

app.post('/api/messages', async (req, res) => {
  try {
    const { username, message } = req.body;
    const newMessage = new Message({ username, message });
    await newMessage.save();
    await pusher.trigger('chat', 'message', { username, message });
    res.json({ message: 'Message sent successfully' });
  } catch (error) {
    console.error('Error sending message:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

console.log('Listening on port 8000');
app.listen(8000);
