"use client";
import { useCallback, useState } from "react";
import {
  QUICK_REPLIES,
  RESERVATION_PROMPTS,
  createWelcomeMessage,
} from "@/constants/chat";
import { SITE } from "@/constants/site";
import { askAssistant } from "@/services/chat";
import { submitReservation } from "@/services/reservation";
import { generateId } from "@/lib/utils";
const emptyReservation = {};
export function useChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([createWelcomeMessage()]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showQuickReplies, setShowQuickReplies] = useState(true);
  const [reservationStep, setReservationStep] = useState("idle");
  const [reservationData, setReservationData] = useState(emptyReservation);
  const pushAssistant = useCallback((content) => {
    setMessages((prev) => [
      ...prev,
      {
        id: generateId("assistant"),
        role: "assistant",
        content,
        timestamp: Date.now(),
      },
    ]);
  }, []);
  const pushUser = useCallback((content) => {
    setMessages((prev) => [
      ...prev,
      {
        id: generateId("user"),
        role: "user",
        content,
        timestamp: Date.now(),
      },
    ]);
  }, []);
  const startReservation = useCallback(() => {
    setShowQuickReplies(false);
    setReservationStep("nombre");
    setReservationData(emptyReservation);
    pushAssistant(RESERVATION_PROMPTS.nombre);
  }, [pushAssistant]);
  const handleQuickAction = useCallback(
    (action) => {
      const labels = {
        reservar: "Agendar una cita",
        talles: "Ver talles",
        asesora: "Hablar con una asesora",
      };
      pushUser(labels[action]);
      setShowQuickReplies(false);
      if (action === "reservar") {
        startReservation();
        return;
      }
      if (action === "talles") {
        pushAssistant(
          "Trabajamos con talles aproximados del XS al XL. En la cita te ayudamos a encontrar el ajuste ideal y, si hace falta, coordinamos arreglos.",
        );
        setShowQuickReplies(true);
        return;
      }
      pushAssistant(
        `Perfecto. Podés hablar directamente con una asesora por WhatsApp: ${SITE.whatsapp}\n\nTambién estamos en Instagram: ${SITE.instagramHandle}`,
      );
      setShowQuickReplies(true);
    },
    [pushAssistant, pushUser, startReservation],
  );
  const advanceReservation = useCallback(
    async (value) => {
      const trimmed = value.trim();
      if (!trimmed) return;
      const stepFieldMap = {
        nombre: "nombre",
        telefono: "telefono",
        fecha: "fechaBoda",
        estilo: "estiloPreferido",
        talle: "talleAproximado",
      };
      if (
        reservationStep === "idle" ||
        reservationStep === "confirmacion" ||
        reservationStep === "enviado"
      ) {
        return;
      }
      const field = stepFieldMap[reservationStep];
      const nextData = { ...reservationData, [field]: trimmed };
      setReservationData(nextData);
      const order = ["nombre", "telefono", "fecha", "estilo", "talle"];
      const currentIndex = order.indexOf(reservationStep);
      const nextStep = order[currentIndex + 1];
      if (nextStep) {
        setReservationStep(nextStep);
        pushAssistant(RESERVATION_PROMPTS[nextStep]);
        return;
      }
      setReservationStep("confirmacion");
      setIsTyping(true);
      try {
        await submitReservation(nextData);
        pushAssistant(
          `¡Listo, ${nextData.nombre}! Recibimos tu solicitud de cita.\n\nResumen:\n• Teléfono: ${nextData.telefono}\n• Fecha de la boda: ${nextData.fechaBoda}\n• Estilo: ${nextData.estiloPreferido}\n• Talle: ${nextData.talleAproximado}\n\nUna asesora se va a comunicar con vos para confirmar el día y horario.\n\n¿Te puedo ayudar con algo más?`,
        );
        setReservationStep("idle");
        setReservationData(emptyReservation);
        setShowQuickReplies(true);
      } catch (error) {
        setReservationStep("idle");
        const detail =
          error instanceof Error && error.message
            ? error.message
            : "Error desconocido";
        pushAssistant(
          `Hubo un inconveniente al enviar tu solicitud.\n\nDetalle: ${detail}\n\nPodés intentarlo de nuevo o escribirnos por WhatsApp.`,
        );
        setShowQuickReplies(true);
      } finally {
        setIsTyping(false);
      }
    },
    [pushAssistant, reservationData, reservationStep],
  );
  const sendMessage = useCallback(async () => {
    const text = input.trim();
    if (!text || isTyping) return;
    pushUser(text);
    setInput("");
    if (reservationStep !== "idle" && reservationStep !== "enviado") {
      await advanceReservation(text);
      return;
    }
    setIsTyping(true);
    setShowQuickReplies(false);
    try {
      const response = await askAssistant({
        messages: [
          ...messages,
          {
            id: generateId("user"),
            role: "user",
            content: text,
            timestamp: Date.now(),
          },
        ],
        context: { reservationStep, reservationData },
      });
      pushAssistant(response.message);
      setShowQuickReplies(true);
    } catch {
      pushAssistant(
        "No pude procesar tu mensaje ahora. Probá las opciones rápidas o escribinos por WhatsApp.",
      );
      setShowQuickReplies(true);
    } finally {
      setIsTyping(false);
    }
  }, [
    advanceReservation,
    input,
    isTyping,
    messages,
    pushAssistant,
    pushUser,
    reservationData,
    reservationStep,
  ]);
  const resetConversation = useCallback(() => {
    setMessages([createWelcomeMessage()]);
    setInput("");
    setIsTyping(false);
    setShowQuickReplies(true);
    setReservationStep("idle");
    setReservationData(emptyReservation);
  }, []);

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);
  const toggle = () => setIsOpen((v) => !v);

  const isInReservationFlow =
    reservationStep !== "idle" &&
    reservationStep !== "enviado" &&
    reservationStep !== "confirmacion";

  return {
    isOpen,
    open,
    close,
    toggle,
    resetConversation,
    messages,
    input,
    setInput,
    isTyping,
    showQuickReplies: showQuickReplies && !isInReservationFlow,
    quickReplies: QUICK_REPLIES,
    handleQuickAction,
    sendMessage,
    reservationStep,
  };
}
