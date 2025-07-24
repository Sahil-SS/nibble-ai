import axios from "axios";
import OpenAI from "openai";

const axiosClient = axios.create({
  baseURL: "http://192.168.1.7:1337/api",
  headers: {
    Authorization: `Bearer ${process.env.EXPO_PUBLIC_STRAPI_API_KEY}`,
  },
});

const openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: process.env.EXPO_PUBLIC_OPENROUTER_API_KEY,
});

const GetCategories = () => axiosClient.get("/categories?populate=*");
const createNewRecipe = async (data: any) =>
  await axiosClient.post("/recipes", { data: data });
const GetAllRecipes = async () => {
  return await axiosClient.get("/recipes?populate=*");
};

const AiModel = async (prompt: string) =>
  await openai.chat.completions.create({
    model: "google/gemini-2.0-flash-experimental:free",
    messages: [
      {
        role: "user",
        content: prompt,
      },
    ],
    response_format: {
      type: "json_object",
    },
  });

const BASE_URL = "https://aigurulab.tech";

const GenerateAiImage = async (input: string) => {
  const res = await axios.post(
    BASE_URL + "/api/generate-image",
    {
      width: 1024,
      height: 1024,
      input: input,
      model: "sdxl",
      aspectRatio: "1:1",
    },
    {
      headers: {
        "x-api-key": process.env.EXPO_PUBLIC_AIGURULAB_API_KEY,
        "Content-Type": "application/json",
      },
    }
  );

  // Safely extract image URL
  return res.data?.imageUrl || res.data?.url || null;
};

export default {
  GetCategories,
  AiModel,
  GenerateAiImage,
  createNewRecipe,
  GetAllRecipes,
};
