const express=require('express');
// initilizing express app
const app= express();
const { createServer } = require("http");
const { Server } = require("socket.io");

// for importing from anywhere else
const userRouter= require('./routers/userRouter')
// const productRouter= require('./routers/productRouter')
const cors = require('cors');


// adding middleware(dosen't generate but is used fro passing only)

app.use(express.json()); 


// for allowing frontend to access backend
app.use(cors({origin:['http://localhost:3000']}));


app.use('/user',userRouter); 
// app.use('/product',productRouter); 
const httpServer = createServer(app);
const io = new Server(httpServer, { cors: { origin: ['http://localhost:3000'] } });

io.on("connection", (socket) => {
  console.log("New client connected");
  
//   receiving an event from client
socket.on('sendMsg', (data) =>{
    console.log(data);
})
});



const port=5000;

app.get('/',(req , res)=>{
    res.send('Response from Express');
});

app.get('/home',(req , res)=>{
    res.send('Response from Express Home');
});

// starting the server
httpServer.listen(port, ()=>{
    console.log(`server started at port 5000`);});





