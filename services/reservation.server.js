import { createSupabaseAdmin } from "@/lib/supabase";

export function mapReservationToRow(payload) {
  return {
    nombre: payload.nombre,
    telefono: payload.telefono,
    fecha_boda: payload.fechaBoda,
    estilo_preferido: payload.estiloPreferido,
    color_preferido: "Blanco",
    talle_aproximado: payload.talleAproximado,
    source: payload.source || "chatbot",
  };
}

export async function saveReservation(payload) {
  const supabase = createSupabaseAdmin();
  const row = mapReservationToRow(payload);

  const { data, error } = await supabase
    .from("reservations")
    .insert(row)
    .select("id, created_at")
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return data;
}
