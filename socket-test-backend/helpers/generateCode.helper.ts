import { v4 as uuidv4 } from "uuid";

const generateCode = () => {
  const generatedCode = uuidv4();
  return generatedCode;
};

export default generateCode;
