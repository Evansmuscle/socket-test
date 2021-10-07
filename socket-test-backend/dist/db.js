"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var connectToDB = function () {
    var uri = process.env.MONGO_URI;
    console.log(uri);
    if (uri) {
        mongoose_1.default.connect(uri, {}, function () {
            console.log("Connected to DB");
        });
    }
};
exports.default = connectToDB;
