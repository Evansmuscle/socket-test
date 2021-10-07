import axios, { AxiosResponse } from "axios";
import { GenerateCodeData } from "../../types/resultTypes";

const baseURL = "http://localhost:3000";

const API = axios.create({
  baseURL,
});

export const generateCode = async () => {
  const { data }: AxiosResponse<GenerateCodeData> = await API.get(
    "/code/generate"
  );

  return data;
};

export const getCode = async () => {
  const { data }: AxiosResponse<GenerateCodeData> = await API.get("/code/");

  return data;
};
