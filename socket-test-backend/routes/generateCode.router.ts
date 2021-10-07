import { Router } from "express";
import { generateCodeController } from "../controllers/generateCode.controller";

const router = Router();

router.route("/generate").get(generateCodeController);

export default router;
