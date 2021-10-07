import { Router } from "express";
import {
  generateCodeController,
  getCodeController,
} from "../controllers/generateCode.controller";

const router = Router();

router.route("/generate").get(generateCodeController);
router.route("/").get(getCodeController);

export default router;
