import { NextResponse } from "next/server";
import { isResendConfigured, sendReservationEmail } from "@/lib/email";
import { isSupabaseConfigured } from "@/lib/supabase";
import { saveReservation } from "@/services/reservation.server";

const REQUIRED_FIELDS = [
  "nombre",
  "telefono",
  "fechaBoda",
  "estiloPreferido",
  "colorPreferido",
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
    if (!isSupabaseConfigured()) {
      return NextResponse.json(
        {
          ok: false,
          message:
            "Supabase no está configurado. Revisá las variables de entorno.",
        },
        { status: 503 },
      );
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
      colorPreferido: String(body.colorPreferido).trim(),
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

    return NextResponse.json(
      { ok: false, message: "Error al procesar la solicitud" },
      { status: 500 },
    );
  }
}
