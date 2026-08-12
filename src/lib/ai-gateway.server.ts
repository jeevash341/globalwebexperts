import { createGoogleGenerativeAI } from "@ai-sdk/google";

export function createGeminiProvider(geminiApiKey: string) {
  return createGoogleGenerativeAI({
    apiKey: geminiApiKey,
  });
}
