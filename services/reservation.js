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

  const result = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(
      result.message || "No se pudo enviar la solicitud",
    );
  }

  return result;
}

export function isReservationComplete(data) {
  return Boolean(
    data.nombre &&
      data.telefono &&
      data.fechaBoda &&
    data.estiloPreferido &&
    data.talleAproximado,
  );
}
