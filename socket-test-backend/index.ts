import dotenv from "dotenv";
dotenv.config();

import http from "http";
import { Server } from "socket.io";

import app from "./app";
import connectToDB from "./db";

const server = http.createServer(app);
const io = new Server(server);

const PORT = process.env.PORT || 3000;

connectToDB();

io.on("connection", (socket) => {
  console.log(socket.id);
});

server.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});
