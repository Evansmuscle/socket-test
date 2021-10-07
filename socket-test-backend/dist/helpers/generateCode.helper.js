"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var uuid_1 = require("uuid");
var generateCode = function () {
    var generatedCode = (0, uuid_1.v4)();
    return generatedCode;
};
exports.default = generateCode;
