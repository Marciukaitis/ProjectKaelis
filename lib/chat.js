/**
 * Cliente de chat preparado para OpenAI.
 */
export async function sendChatMessage(request) {
  // const response = await fetch("/api/chat", {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify(request),
  // });
  //
  // if (!response.ok) {
  //   throw new Error("No se pudo obtener respuesta del asistente");
  // }
  //
  // return response.json();

  void request;

  return {
    message:
      "Gracias por tu mensaje. Pronto voy a poder ayudarte con inteligencia artificial. Mientras tanto, usá las opciones rápidas o escribinos por WhatsApp.",
  };
}

export function buildKaelisSystemPrompt() {
  return [
    "Sos la asistente virtual de Kaelis Atelier, un atelier de venta de vestidos de novia en Uruguay.",
    "Tu tono es cálido, elegante, cercano y profesional. Hablás en español rioplatense.",
    "Ayudás a consultar modelos, talles, citas y dudas sobre vestidos de novia.",
    "No inventes precios ni stock exacto. Si no sabés algo, invitá a hablar con una asesora.",
    "El objetivo principal es generar confianza y facilitar el agendado de una cita.",
  ].join(" ");
}
