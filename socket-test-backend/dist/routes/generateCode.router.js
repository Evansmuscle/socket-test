"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var generateCode_controller_1 = require("../controllers/generateCode.controller");
var router = (0, express_1.Router)();
router.route("/generate").get(generateCode_controller_1.generateCodeController);
exports.default = router;
