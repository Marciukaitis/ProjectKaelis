/**
 * Servicio de citas (cliente).
 * Envía los datos a POST /api/reservation → Supabase + Resend.
 */
export async function submitReservation(data) {
  const payload = {
    ...data,
    source: "chatbot",
    createdAt: new Date().toISOString(),
  };
  const response = await fetch("/api/reservation", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!response.ok) {
    throw new Error("No se pudo enviar la solicitud");
  }
  return response.json();
}
export function isReservationComplete(data) {
  return Boolean(
    data.nombre &&
    data.telefono &&
    data.fechaBoda &&
    data.estiloPreferido &&
    data.colorPreferido &&
    data.talleAproximado,
  );
}
