import { NextResponse } from "next/server";
import { buildKaelisSystemPrompt } from "@/lib/chat";

/**
 * POST /api/chat
 *
 * Stub preparado para OpenAI.
 * Cuando se implemente, usará el system prompt de Kaelis Atelier
 * y devolverá la respuesta del modelo.
 */
export async function POST(request) {
  try {
    const body = await request.json();

    if (!body.messages?.length) {
      return NextResponse.json(
        { message: "No se recibieron mensajes" },
        { status: 400 },
      );
    }

    // Preparado para OpenAI:
    // const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
    // const completion = await openai.chat.completions.create({
    //   model: "gpt-4o-mini",
    //   messages: [
    //     { role: "system", content: buildKaelisSystemPrompt() },
    //     ...body.messages.map((m) => ({ role: m.role, content: m.content })),
    //   ],
    // });

    void buildKaelisSystemPrompt;

    return NextResponse.json({
      message:
        "La integración con OpenAI aún no está activa. Usá las opciones rápidas o contactanos por WhatsApp.",
    });
  } catch {
    return NextResponse.json(
      { message: "Error en el servicio de chat" },
      { status: 500 },
    );
  }
}
