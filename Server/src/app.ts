import "dotenv/config";
import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import cors from 'cors';

const app = express();

app.use(cors());

const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "http://localhost:5173",
        methods: ['GET', 'POST'],
    }
});

interface dataType{
    author: string,
    message: string
}

interface connectionsType{
    count: number | null | void
}

var messageList: dataType[] = [];
var connections = 0

io.on("connection", (socket) => {
    socket.emit('receivedMessage', messageList);

    connections += 1;
    io.emit('ConnectionsInfo', connections);

    socket.on('disconnect', e => {
        connections = connections - 1
        io.emit('ConnectionsInfo', connections);
    })
    
    socket.on('sendMessage', data => {
        messageList.push(data);
        io.emit('receivedMessage', messageList);
    });
})




const { PORT } = process.env;
server.listen(PORT, () => console.log('Server is running on port 4001 🚀'));