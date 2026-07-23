export const CHAT_WELCOME_MESSAGE =
  "¡Hola! Soy la asistente virtual de Kaelis Atelier ✨\n\nEstoy para ayudarte a encontrar tu vestido de novia ideal.\n\nPodés agendar una cita, consultar talles o cualquier duda.";

export const QUICK_REPLIES = [
  { id: "1", label: "Agendar una cita", action: "reservar" },
  { id: "2", label: "Ver talles", action: "talles" },
  { id: "3", label: "Hablar con una asesora", action: "asesora" },
];

export const RESERVATION_PROMPTS = {
  nombre: "Perfecto. Para agendar tu cita, ¿cuál es tu nombre?",
  telefono: "Gracias. ¿Cuál es tu número de teléfono?",
  fecha: "¿Cuál es la fecha de tu boda?",
  estilo:
    "¿Qué estilo de vestido te gusta? (encaje, clásico, moderno, con perlas, otro)\n\nTodos nuestros vestidos son blancos.",
  talle: "¿Cuál es tu talle aproximado?",
};

export const RESERVATION_STEPS_ORDER = [
  "nombre",
  "telefono",
  "fecha",
  "estilo",
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
