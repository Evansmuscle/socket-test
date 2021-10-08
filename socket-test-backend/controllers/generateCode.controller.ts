import { Request, Response } from "express";
import { GeneratedCodeModel } from "../models/generateCode.model";
import generateCode from "../helpers/generateCode.helper";
import { io } from "..";

export const generateCodeController = async (req: Request, res: Response) => {
  try {
    await GeneratedCodeModel.deleteMany();

    const code = generateCode();

    const codeDoc = new GeneratedCodeModel({
      code,
    });

    await codeDoc.save();

    io.emit("code:create");

    res.status(200).json({
      status: "success",
      code,
    });
  } catch (err) {
    res.status(200).json({
      status: "failed",
    });
  }
};

export const getCodeController = async (req: Request, res: Response) => {
  try {
    const codeArray = await GeneratedCodeModel.find();
    const code = codeArray[0];

    res.status(200).json({
      status: "success",
      code: code.code,
    });
  } catch (err) {
    res.status(200).json({
      status: "failed",
    });
  }
};
