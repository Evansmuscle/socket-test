"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeneratedCodeModel = void 0;
var mongoose_1 = require("mongoose");
var generatedCodeSchema = new mongoose_1.Schema({
    code: { type: String, required: true },
});
exports.GeneratedCodeModel = (0, mongoose_1.model)("GeneratedCode", generatedCodeSchema);
