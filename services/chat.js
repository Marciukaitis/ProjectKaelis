import { sendChatMessage } from "@/lib/chat";
/**
 * Capa de servicio para el chatbot.
 * Centraliza llamadas al lib/chat y permite ampliar lógica de negocio.
 */
export async function askAssistant(request) {
  return sendChatMessage(request);
}
