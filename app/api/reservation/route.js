import { NextResponse } from "next/server";

/**
 * POST /api/reservation
 *
 * Recibe datos de cita desde el chatbot.
 * Posteriormente enviará el payload a un webhook de n8n.
 */
export async function POST(request) {
  try {
    const body = await request.json();

    const required = [
      "nombre",
      "telefono",
      "fechaBoda",
      "estiloPreferido",
      "colorPreferido",
      "talleAproximado",
    ];

    const missing = required.filter((key) => !body[key]);

    if (missing.length > 0) {
      return NextResponse.json(
        {
          ok: false,
          message: `Faltan campos: ${missing.join(", ")}`,
        },
        { status: 400 },
      );
    }

    console.info("[reservation] payload listo para n8n:", body);

    return NextResponse.json({
      ok: true,
      message:
        "Recibimos tu solicitud. Una asesora se va a comunicar con vos pronto.",
    });
  } catch {
    return NextResponse.json(
      { ok: false, message: "Error al procesar la solicitud" },
      { status: 500 },
    );
  }
}
