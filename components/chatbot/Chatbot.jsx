"use client";
import { useEffect, useRef } from "react";
import { MessageCircle, Send, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useChatbot } from "@/hooks/useChatbot";
import { cn } from "@/lib/utils";
function QuickReplies({ replies, onSelect }) {
  return (
    <div className="flex flex-wrap gap-2 px-4 pb-3">
      {replies.map((reply) => (
        <button
          key={reply.id}
          type="button"
          onClick={() => onSelect(reply.action)}
          className="rounded-full border border-kaelis-border bg-white px-3 py-1.5 text-left text-xs text-kaelis-ink transition-colors hover:border-kaelis-hover hover:bg-kaelis-secondary/30"
        >
          {reply.label}
        </button>
      ))}
    </div>
  );
}
export function Chatbot() {
  const {
    isOpen,
    open,
    toggle,
    close,
    messages,
    input,
    setInput,
    isTyping,
    showQuickReplies,
    quickReplies,
    handleQuickAction,
    sendMessage,
  } = useChatbot();
  const messagesEndRef = useRef(null);
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  useEffect(() => {
    const onAgendarCita = () => {
      open();
      handleQuickAction("reservar");
    };

    window.addEventListener("kaelis:agendar-cita", onAgendarCita);
    return () =>
      window.removeEventListener("kaelis:agendar-cita", onAgendarCita);
  }, [open, handleQuickAction]);

  return (
    <div className="fixed bottom-5 right-5 z-[60] sm:bottom-7 sm:right-7">
      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="mb-4 flex h-[min(560px,70vh)] w-[min(380px,calc(100vw-2.5rem))] flex-col overflow-hidden rounded-2xl border border-kaelis-border bg-white shadow-[0_20px_60px_rgba(17,17,17,0.12)]"
            role="dialog"
            aria-label="Asistente virtual de Kaelis Atelier"
            aria-modal="true"
          >
            <div className="flex items-center justify-between border-b border-kaelis-border bg-[#FAF8F5] px-4 py-3.5">
              <div>
                <p className="font-display text-base text-kaelis-ink">
                  Asesora Kaelis
                </p>
                <p className="text-xs text-kaelis-muted">
                  Te ayudamos a encontrar tu vestido de novia
                </p>
              </div>
              <button
                type="button"
                onClick={close}
                aria-label="Cerrar chat"
                className="rounded-full p-2 text-kaelis-muted transition-colors hover:bg-white hover:text-kaelis-ink"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div
              className="flex-1 space-y-3 overflow-y-auto px-4 py-4"
              aria-live="polite"
            >
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={cn(
                    "flex",
                    message.role === "user" ? "justify-end" : "justify-start",
                  )}
                >
                  <div
                    className={cn(
                      "max-w-[85%] whitespace-pre-wrap rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed",
                      message.role === "user"
                        ? "rounded-br-md bg-kaelis-ink text-white"
                        : "rounded-bl-md bg-[#F7F4EF] text-kaelis-ink",
                    )}
                  >
                    {message.content}
                  </div>
                </div>
              ))}

              {isTyping ? (
                <div className="flex justify-start">
                  <div className="rounded-2xl rounded-bl-md bg-[#F7F4EF] px-4 py-3 text-sm text-kaelis-muted">
                    Escribiendo…
                  </div>
                </div>
              ) : null}
              <div ref={messagesEndRef} />
            </div>

            {showQuickReplies ? (
              <QuickReplies
                replies={quickReplies}
                onSelect={handleQuickAction}
              />
            ) : null}

            <form
              className="flex items-center gap-2 border-t border-kaelis-border p-3"
              onSubmit={(e) => {
                e.preventDefault();
                void sendMessage();
              }}
            >
              <label htmlFor="chat-input" className="sr-only">
                Escribí tu mensaje
              </label>
              <input
                id="chat-input"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Escribí tu mensaje…"
                className="flex-1 rounded-full border border-kaelis-border bg-white px-4 py-2.5 text-sm text-kaelis-ink placeholder:text-kaelis-muted/70 focus:border-kaelis-secondary focus:outline-none focus:ring-2 focus:ring-kaelis-secondary/40"
                autoComplete="off"
              />
              <button
                type="submit"
                aria-label="Enviar mensaje"
                disabled={!input.trim() || isTyping}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-kaelis-secondary text-kaelis-ink transition-colors hover:bg-kaelis-hover disabled:opacity-40"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <motion.button
        type="button"
        onClick={toggle}
        aria-label={isOpen ? "Cerrar asistente" : "Abrir asistente virtual"}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.97 }}
        className="ml-auto flex h-14 w-14 items-center justify-center rounded-full bg-kaelis-ink text-white shadow-[0_12px_30px_rgba(17,17,17,0.2)] transition-colors hover:bg-kaelis-hover"
      >
        {isOpen ? (
          <X className="h-5 w-5" />
        ) : (
          <MessageCircle className="h-5 w-5" />
        )}
      </motion.button>
    </div>
  );
}
