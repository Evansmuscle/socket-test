"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var app_1 = __importDefault(require("./app"));
var db_1 = __importDefault(require("./db"));
var PORT = process.env.PORT || 3000;
(0, db_1.default)();
app_1.default.listen(PORT, function () {
    console.log("Server started at port " + PORT);
});
