import { StreamingTextResponse, OpenAIStream } from "ai";
import type { ActionFunction } from "@remix-run/node";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Define the structure of a message
interface ChatMessage {
  content: string;
  role: "system" | "user" | "assistant";
}

export const action: ActionFunction = async ({ request }) => {
  const { messages } = (await request.json()) as { messages: ChatMessage[] };

  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    stream: true,
    messages: messages.map((message: ChatMessage) => ({
      content: message.content,
      role: message.role,
    })),
  });

  const stream = OpenAIStream(response);
  return new StreamingTextResponse(stream);
};
