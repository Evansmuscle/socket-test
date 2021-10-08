"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.io = void 0;
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var http_1 = __importDefault(require("http"));
var socket_io_1 = require("socket.io");
var app_1 = __importDefault(require("./app"));
var db_1 = __importDefault(require("./db"));
var server = http_1.default.createServer(app_1.default);
exports.io = new socket_io_1.Server(server, {
    cors: {
        origin: true,
        methods: ["GET", "POST"],
    },
    serveClient: false,
});
var PORT = process.env.PORT || 3000;
(0, db_1.default)();
exports.io.on("connection", function (socket) {
    console.log("Connected to socket");
    exports.io.on("disconnect", function (socket) {
        console.log("disconnected");
    });
});
server.listen(PORT, function () {
    console.log("Server started at port " + PORT);
});
