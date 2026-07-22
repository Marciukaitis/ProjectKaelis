/**
 * Minimal className merger without external deps.
 */
export function cn(...inputs) {
  return inputs.filter(Boolean).join(" ");
}
export function generateId(prefix = "id") {
  return `${prefix}-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}
export function scrollToId(id) {
  const el = document.getElementById(id.replace("#", ""));
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}
