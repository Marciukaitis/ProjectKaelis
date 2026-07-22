# Kaelis Atelier

Landing page premium para alquiler de vestidos.

## Stack

- Next.js 15
- React 19
- JavaScript
- Tailwind CSS 4
- Framer Motion
- Lucide Icons

## Empezar

```bash
npm install
npm run dev
```

Abrí [http://localhost:3000](http://localhost:3000).

## Estructura

```
app/           # App Router, layout, página y API routes
components/    # UI, layout, chatbot, dresses, seo
sections/      # Secciones de la landing
hooks/         # Hooks (scroll, chatbot)
lib/           # Utilidades y cliente de chat (OpenAI-ready)
services/      # Capas de negocio (chat, reservation)
constants/     # Contenido y configuración del sitio
public/        # Assets estáticos
```

## APIs preparadas

- `POST /api/reservation` — recibe reservas del chatbot (listo para n8n)
- `POST /api/chat` — stub para OpenAI

## Configuración

1. Copiá `.env.example` a `.env.local`
2. Completá `OPENAI_API_KEY` y `N8N_WEBHOOK_URL` cuando los actives
3. Actualizá WhatsApp / Instagram en `constants/site.ts`
