import { Resend } from "resend";

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

function buildReservationEmailHtml(reservation) {
  return `
    <div style="font-family: Georgia, serif; color: #111; max-width: 560px;">
      <h1 style="font-size: 22px; font-weight: normal; margin-bottom: 8px;">
        Nueva cita — Kaelis Atelier
      </h1>
      <p style="color: #666; font-size: 14px; margin-top: 0;">
        Una clienta completó el formulario del chatbot.
      </p>
      <table style="width: 100%; border-collapse: collapse; margin-top: 24px; font-size: 15px;">
        <tr>
          <td style="padding: 10px 0; border-bottom: 1px solid #eaeaea; color: #666;">Nombre</td>
          <td style="padding: 10px 0; border-bottom: 1px solid #eaeaea;">${reservation.nombre}</td>
        </tr>
        <tr>
          <td style="padding: 10px 0; border-bottom: 1px solid #eaeaea; color: #666;">Teléfono</td>
          <td style="padding: 10px 0; border-bottom: 1px solid #eaeaea;">${reservation.telefono}</td>
        </tr>
        <tr>
          <td style="padding: 10px 0; border-bottom: 1px solid #eaeaea; color: #666;">Fecha de la boda</td>
          <td style="padding: 10px 0; border-bottom: 1px solid #eaeaea;">${reservation.fechaBoda}</td>
        </tr>
        <tr>
          <td style="padding: 10px 0; border-bottom: 1px solid #eaeaea; color: #666;">Estilo</td>
          <td style="padding: 10px 0; border-bottom: 1px solid #eaeaea;">${reservation.estiloPreferido}</td>
        </tr>
        <tr>
          <td style="padding: 10px 0; border-bottom: 1px solid #eaeaea; color: #666;">Color</td>
          <td style="padding: 10px 0; border-bottom: 1px solid #eaeaea;">${reservation.colorPreferido}</td>
        </tr>
        <tr>
          <td style="padding: 10px 0; color: #666;">Talle aproximado</td>
          <td style="padding: 10px 0;">${reservation.talleAproximado}</td>
        </tr>
      </table>
      <p style="margin-top: 28px; font-size: 13px; color: #666;">
        Contactala por WhatsApp para confirmar día y horario de la cita.
      </p>
    </div>
  `;
}

export async function sendReservationEmail(reservation) {
  const resend = getResendClient();
  const to = process.env.NOTIFICATION_EMAIL;
  const from = process.env.RESEND_FROM;

  if (!to || !from) {
    throw new Error("Faltan NOTIFICATION_EMAIL o RESEND_FROM");
  }

  const { error } = await resend.emails.send({
    from,
    to: [to],
    subject: `Nueva cita — ${reservation.nombre} | Kaelis Atelier`,
    html: buildReservationEmailHtml(reservation),
  });

  if (error) {
    throw new Error(error.message);
  }
}
