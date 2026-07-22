import { createClient } from "@supabase/supabase-js";

const PLACEHOLDER_PATTERNS = [
  /xxxx/i,
  /tu-proyecto/i,
  /pegá_acá/i,
  /example/i,
  /\.{3}$/,
  /^eyJ\.\.\.$/i,
  /^re_\.\.\.$/i,
];

function looksLikePlaceholder(value) {
  if (!value) return true;
  return PLACEHOLDER_PATTERNS.some((pattern) => pattern.test(value.trim()));
}

export function getSupabaseConfigError() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL?.trim();
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY?.trim();

  if (!url || !serviceRoleKey) {
    return "Faltan NEXT_PUBLIC_SUPABASE_URL o SUPABASE_SERVICE_ROLE_KEY en .env.local";
  }

  if (looksLikePlaceholder(url)) {
    return "NEXT_PUBLIC_SUPABASE_URL sigue siendo un valor de ejemplo. Pegá tu Project URL real de Supabase (Settings → General).";
  }

  if (!/^https:\/\/[a-z0-9-]+\.supabase\.co\/?$/i.test(url)) {
    return "NEXT_PUBLIC_SUPABASE_URL no tiene un formato válido. Debe ser https://tu-proyecto.supabase.co";
  }

  if (looksLikePlaceholder(serviceRoleKey) || serviceRoleKey.length < 100) {
    return "SUPABASE_SERVICE_ROLE_KEY está incompleta o es un placeholder. Copiá la clave service_role COMPLETA desde Supabase → API Keys → Legacy.";
  }

  return null;
}

/**
 * Cliente Supabase solo para el servidor (API routes).
 */
export function createSupabaseAdmin() {
  const configError = getSupabaseConfigError();
  if (configError) {
    throw new Error(configError);
  }

  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL.trim(),
    process.env.SUPABASE_SERVICE_ROLE_KEY.trim(),
    {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
      },
    },
  );
}

export function isSupabaseConfigured() {
  return getSupabaseConfigError() === null;
}
