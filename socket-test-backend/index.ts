import dotenv from "dotenv";
dotenv.config();

import http from "http";
import { Server } from "socket.io";

import app from "./app";
import connectToDB from "./db";

const server = http.createServer(app);
export const io = new Server(server, {
  cors: {
    origin: true,
    methods: ["GET", "POST"],
  },
  serveClient: false,
});

const PORT = process.env.PORT || 3000;

connectToDB();

io.on("connection", (socket) => {
  console.log("Connected to socket");

  io.on("disconnect", (socket) => {
    console.log("disconnected");
  });
});

server.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});
