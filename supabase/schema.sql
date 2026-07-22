-- Ejecutar en Supabase → SQL Editor
-- Tabla de citas del chatbot Kaelis Atelier

create table if not exists public.reservations (
  id uuid primary key default gen_random_uuid(),
  nombre text not null,
  telefono text not null,
  fecha_boda text not null,
  estilo_preferido text not null,
  color_preferido text not null,
  talle_aproximado text not null,
  source text not null default 'chatbot',
  created_at timestamptz not null default now()
);

create index if not exists reservations_created_at_idx
  on public.reservations (created_at desc);

alter table public.reservations enable row level security;

-- Sin políticas públicas: solo la API (service role) inserta y lee.
