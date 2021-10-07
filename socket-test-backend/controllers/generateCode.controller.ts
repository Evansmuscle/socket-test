import { Request, Response } from "express";
import { GeneratedCodeModel } from "../models/generateCode.model";
import generateCode from "../helpers/generateCode.helper";

export const generateCodeController = async (req: Request, res: Response) => {
  try {
    await GeneratedCodeModel.deleteMany();

    const code = generateCode();

    const codeDoc = new GeneratedCodeModel({
      code,
    });

    await codeDoc.save();

    res.status(200).json({
      status: "success",
      code,
    });
  } catch (err) {
    throw new Error((err as Error).message);
  }
};
