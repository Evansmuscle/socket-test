import { model, Schema } from "mongoose";

interface GeneratedCodeSchema {
  code: string;
}

const generatedCodeSchema = new Schema<GeneratedCodeSchema>({
  code: { type: String, required: true },
});

export const GeneratedCodeModel = model<GeneratedCodeSchema>(
  "GeneratedCode",
  generatedCodeSchema
);
