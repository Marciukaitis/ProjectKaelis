export const CHAT_WELCOME_MESSAGE =
  "¡Hola! Soy la asistente virtual de Kaelis Atelier ✨\n\nEstoy para ayudarte a encontrar tu vestido de novia ideal.\n\nPodés consultarme modelos, talles, citas o cualquier duda.";

export const QUICK_REPLIES = [
  { id: "1", label: "Agendar una cita", action: "reservar" },
  { id: "2", label: "Consultar un modelo", action: "disponibilidad" },
  { id: "3", label: "Ver talles", action: "talles" },
  { id: "4", label: "Hablar con una asesora", action: "asesora" },
];

export const RESERVATION_PROMPTS = {
  nombre: "Perfecto. Para agendar tu cita, ¿cuál es tu nombre?",
  telefono: "Gracias. ¿Cuál es tu número de teléfono?",
  fecha: "¿Cuál es la fecha de tu boda?",
  estilo: "¿Qué estilo de vestido te gusta? (encaje, clásico, moderno, con perlas, otro)",
  color: "¿Tenés algún color preferido?",
  talle: "¿Cuál es tu talle aproximado?",
};

export const RESERVATION_STEPS_ORDER = [
  "nombre",
  "telefono",
  "fecha",
  "estilo",
  "color",
  "talle",
  "confirmacion",
];

export function createWelcomeMessage() {
  return {
    id: "welcome",
    role: "assistant",
    content: CHAT_WELCOME_MESSAGE,
    timestamp: Date.now(),
  };
}
