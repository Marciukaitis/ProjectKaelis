# Kaelis Atelier

Landing page premium para venta de vestidos de novia.

## Stack

- Next.js 15 + Vercel
- Supabase (guardar citas)
- Resend (email de notificación)
- Chatbot con flujos (sin IA)
- Tailwind CSS 4 · Framer Motion · Lucide Icons

## Empezar en local

```bash
npm install
cp .env.example .env.local
# Completá las variables (Supabase + Resend)
npm run dev
```

## Configurar Supabase

1. Creá un proyecto en [supabase.com](https://supabase.com)
2. En **SQL Editor**, ejecutá el contenido de `supabase/schema.sql`
3. En **Settings → API**, copiá:
   - `Project URL` → `NEXT_PUBLIC_SUPABASE_URL`
   - `service_role` key → `SUPABASE_SERVICE_ROLE_KEY`

## Configurar Resend

1. Creá cuenta en [resend.com](https://resend.com)
2. Generá una API Key → `RESEND_API_KEY`
3. Verificá un dominio o usá `onboarding@resend.dev` para pruebas
4. Definí `RESEND_FROM` y `NOTIFICATION_EMAIL` (tu mail)

## Desplegar en Vercel

1. Subí el repo a GitHub
2. Importá el proyecto en [vercel.com](https://vercel.com)
3. Agregá las mismas variables de `.env.local` en **Settings → Environment Variables**
4. Deploy

## Flujo de una cita

1. La clienta usa **Agendar cita** en el chatbot
2. `POST /api/reservation` guarda en Supabase
3. Resend te envía un correo con los datos

## Estructura

```
app/              # App Router y API routes
components/       # UI, layout, chatbot
sections/         # Secciones de la landing
hooks/            # Scroll, chatbot
lib/              # Supabase, email, utilidades
services/         # Lógica de negocio
supabase/         # Schema SQL
constants/        # Contenido del sitio
public/           # Imágenes
```
