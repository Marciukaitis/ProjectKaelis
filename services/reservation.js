/**
 * Servicio de citas.
 * El frontend envía a POST /api/reservation.
 * Ese endpoint luego reenviará a un webhook de n8n.
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
