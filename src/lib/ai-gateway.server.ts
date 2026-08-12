import { createOpenAICompatible } from "@ai-sdk/openai-compatible";

export function createGeminiProvider(geminiApiKey: string) {
  return createOpenAICompatible({
    name: "google",
    baseURL: "https://generativelanguage.googleapis.com/v1beta/openai/",
    headers: {
      Authorization: `Bearer ${geminiApiKey}`,
    },
  });
}
