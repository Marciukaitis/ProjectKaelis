import { Resend } from "resend";
import { SITE } from "@/constants/site";

function getResendClient() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error("Falta RESEND_API_KEY en el entorno");
  }
  return new Resend(apiKey);
}

export function isResendConfigured() {
  return Boolean(
    process.env.RESEND_API_KEY &&
      process.env.RESEND_FROM &&
      process.env.NOTIFICATION_EMAIL,
  );
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function buildReservationEmailText(reservation) {
  return [
    "Nueva solicitud de cita — Kaelis Atelier",
    "",
    `Nombre: ${reservation.nombre}`,
    `Teléfono: ${reservation.telefono}`,
    `Fecha de la boda: ${reservation.fechaBoda}`,
    `Estilo preferido: ${reservation.estiloPreferido}`,
    `Talle aproximado: ${reservation.talleAproximado}`,
    "",
    "Todos los vestidos son blancos.",
    "",
    `Respondé por WhatsApp: ${SITE.whatsapp}`,
  ].join("\n");
}

function buildReservationEmailHtml(reservation) {
  const nombre = escapeHtml(reservation.nombre);
  const telefono = escapeHtml(reservation.telefono);
  const fecha = escapeHtml(reservation.fechaBoda);
  const estilo = escapeHtml(reservation.estiloPreferido);
  const talle = escapeHtml(reservation.talleAproximado);

  return `
    <div style="font-family: Georgia, 'Times New Roman', serif; color: #111111; max-width: 560px; line-height: 1.5;">
      <p style="margin: 0 0 8px; font-size: 12px; letter-spacing: 0.12em; text-transform: uppercase; color: #666666;">
        Kaelis Atelier
      </p>
      <h1 style="font-size: 22px; font-weight: normal; margin: 0 0 12px;">
        Nueva solicitud de cita
      </h1>
      <p style="color: #666666; font-size: 14px; margin: 0 0 24px;">
        Una clienta completó el formulario del sitio web.
      </p>
      <table style="width: 100%; border-collapse: collapse; font-size: 15px;">
        <tr>
          <td style="padding: 10px 0; border-bottom: 1px solid #eaeaea; color: #666666; width: 42%;">Nombre</td>
          <td style="padding: 10px 0; border-bottom: 1px solid #eaeaea;">${nombre}</td>
        </tr>
        <tr>
          <td style="padding: 10px 0; border-bottom: 1px solid #eaeaea; color: #666666;">Teléfono</td>
          <td style="padding: 10px 0; border-bottom: 1px solid #eaeaea;">${telefono}</td>
        </tr>
        <tr>
          <td style="padding: 10px 0; border-bottom: 1px solid #eaeaea; color: #666666;">Fecha de la boda</td>
          <td style="padding: 10px 0; border-bottom: 1px solid #eaeaea;">${fecha}</td>
        </tr>
        <tr>
          <td style="padding: 10px 0; border-bottom: 1px solid #eaeaea; color: #666666;">Estilo</td>
          <td style="padding: 10px 0; border-bottom: 1px solid #eaeaea;">${estilo}</td>
        </tr>
        <tr>
          <td style="padding: 10px 0; color: #666666;">Talle aproximado</td>
          <td style="padding: 10px 0;">${talle}</td>
        </tr>
      </table>
      <p style="margin-top: 28px; font-size: 13px; color: #666666;">
        Contactala por WhatsApp para confirmar día y horario de la cita.
      </p>
    </div>
  `;
}

export async function sendReservationEmail(reservation) {
  const resend = getResendClient();
  const to = process.env.NOTIFICATION_EMAIL;
  const from = process.env.RESEND_FROM;
  const replyTo = process.env.RESEND_REPLY_TO || SITE.email;

  if (!to || !from) {
    throw new Error("Faltan NOTIFICATION_EMAIL o RESEND_FROM");
  }

  const subject = `[Kaelis Atelier] Cita nueva: ${reservation.nombre}`;

  const { error } = await resend.emails.send({
    from,
    to: [to],
    replyTo,
    subject,
    text: buildReservationEmailText(reservation),
    html: buildReservationEmailHtml(reservation),
    headers: {
      "X-Entity-Ref-ID": `kaelis-cita-${Date.now()}`,
    },
  });

  if (error) {
    throw new Error(error.message);
  }
}
