import { createFileRoute } from "@tanstack/react-router";
import { streamText } from "ai";
import { createGeminiProvider, createLovableAiGatewayProvider } from "@/lib/ai-gateway.server";

type ChatMessage = { role: "user" | "assistant"; content: string };

const SYSTEM_PROMPT = `You are the "Global Web Experts AI Assistant" for Global Web Experts Digital Service.

Facts you may use (never invent anything beyond these):
- Founder / CEO: Jeevash Khatri. Established 2022.
- Website: globalwebexperts.online. Market: Pakistan + international clients.
- Services: 1) Web Development & E-Commerce 2) Branding & Creative Design 3) SEO & Digital Growth 4) AI Video & Commercial Content 5) AI Business Solutions.
- Contact: WhatsApp/Phone 0334-3215006, Email globalwebexpertspk@gmail.com.
- Site pages: /services, /portfolio, /results, /testimonials, /blog, /contact, /request-a-quote.

Behaviour: professional, friendly, concise (usually 2-5 short sentences), helpful, sales-focused but never pushy.
Never fabricate prices, discounts, awards, clients, testimonials, reviews, statistics, revenue, employee numbers, guarantees, results, or services not listed above.
If you lack accurate information, say so plainly and invite the visitor to contact the team via WhatsApp, call or email.
Where useful, guide visitors to a free consultation, a free quote, WhatsApp, call, or email using the real details above.
Use plain text, no markdown headings or tables.`;

export const Route = createFileRoute("/api/assistant")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        let body: { messages?: ChatMessage[] };
        try {
          body = (await request.json()) as { messages?: ChatMessage[] };
        } catch {
          return new Response("Invalid request body", { status: 400 });
        }

        const messages = Array.isArray(body.messages) ? body.messages : [];
        const clean = messages
          .filter(
            (m) =>
              m &&
              (m.role === "user" || m.role === "assistant") &&
              typeof m.content === "string" &&
              m.content.trim().length > 0,
          )
          .slice(-20)
          .map((m) => ({ role: m.role, content: m.content.slice(0, 4000) }));

        if (clean.length === 0) {
          return new Response("Messages are required", { status: 400 });
        }

        const lovableKey = process.env["LOVABLE_API_KEY"];
        const geminiKey = process.env["GEMINI_API_KEY"];
        if (!lovableKey && !geminiKey) {
          return new Response("Assistant is not configured", { status: 500 });
        }

        try {
          const provider = lovableKey
            ? createLovableAiGatewayProvider(lovableKey)
            : createGeminiProvider(geminiKey!);
          const modelId = lovableKey ? "google/gemini-2.5-flash" : "gemini-2.5-flash";
          const result = streamText({
            model: provider(modelId),
            system: SYSTEM_PROMPT,
            messages: clean,
          });

          return result.toTextStreamResponse();
        } catch {
          return new Response("Assistant is temporarily unavailable", { status: 502 });
        }
      },
    },
  },
});