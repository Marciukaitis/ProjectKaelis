export function openAppointmentChat() {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent("kaelis:agendar-cita"));
}
