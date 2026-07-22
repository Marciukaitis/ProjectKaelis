import { NextResponse } from "next/server";
import { isResendConfigured, sendReservationEmail } from "@/lib/email";
import { getSupabaseConfigError } from "@/lib/supabase";
import { saveReservation } from "@/services/reservation.server";

const REQUIRED_FIELDS = [
  "nombre",
  "telefono",
  "fechaBoda",
  "estiloPreferido",
  "talleAproximado",
];

/**
 * POST /api/reservation
 *
 * 1. Guarda la cita en Supabase
 * 2. Envía un correo con Resend a NOTIFICATION_EMAIL
 */
export async function POST(request) {
  try {
    const configError = getSupabaseConfigError();
    if (configError) {
      return NextResponse.json({ ok: false, message: configError }, { status: 503 });
    }

    const body = await request.json();
    const missing = REQUIRED_FIELDS.filter((key) => !body[key]);

    if (missing.length > 0) {
      return NextResponse.json(
        {
          ok: false,
          message: `Faltan campos: ${missing.join(", ")}`,
        },
        { status: 400 },
      );
    }

    const reservation = {
      nombre: String(body.nombre).trim(),
      telefono: String(body.telefono).trim(),
      fechaBoda: String(body.fechaBoda).trim(),
      estiloPreferido: String(body.estiloPreferido).trim(),
      talleAproximado: String(body.talleAproximado).trim(),
      source: body.source || "chatbot",
    };

    const saved = await saveReservation(reservation);

    let emailSent = false;

    if (isResendConfigured()) {
      try {
        await sendReservationEmail(reservation);
        emailSent = true;
      } catch (emailError) {
        console.error("[reservation] error al enviar email:", emailError);
      }
    } else {
      console.warn("[reservation] Resend no configurado — cita guardada sin email");
    }

    return NextResponse.json({
      ok: true,
      id: saved.id,
      emailSent,
      message:
        "Recibimos tu solicitud. Una asesora se va a comunicar con vos pronto.",
    });
  } catch (error) {
    console.error("[reservation] error:", error);

    const isDev = process.env.NODE_ENV === "development";
    const detail =
      error instanceof Error ? error.message : "Error al procesar la solicitud";

    return NextResponse.json(
      {
        ok: false,
        message: isDev ? detail : "Error al procesar la solicitud",
      },
      { status: 500 },
    );
  }
}
