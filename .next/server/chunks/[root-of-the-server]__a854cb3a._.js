module.exports = [
"[project]/.next-internal/server/app/api/reservation/route/actions.js [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__, module, exports) => {

}),
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[project]/lib/email.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isResendConfigured",
    ()=>isResendConfigured,
    "sendReservationEmail",
    ()=>sendReservationEmail
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$resend$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/resend/dist/index.mjs [app-route] (ecmascript)");
;
function getResendClient() {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
        throw new Error("Falta RESEND_API_KEY en el entorno");
    }
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$resend$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Resend"](apiKey);
}
function isResendConfigured() {
    return Boolean(process.env.RESEND_API_KEY && process.env.RESEND_FROM && process.env.NOTIFICATION_EMAIL);
}
function buildReservationEmailHtml(reservation) {
    return `
    <div style="font-family: Georgia, serif; color: #111; max-width: 560px;">
      <h1 style="font-size: 22px; font-weight: normal; margin-bottom: 8px;">
        Nueva cita — Kaelis Atelier
      </h1>
      <p style="color: #666; font-size: 14px; margin-top: 0;">
        Una clienta completó el formulario del chatbot.
      </p>
      <table style="width: 100%; border-collapse: collapse; margin-top: 24px; font-size: 15px;">
        <tr>
          <td style="padding: 10px 0; border-bottom: 1px solid #eaeaea; color: #666;">Nombre</td>
          <td style="padding: 10px 0; border-bottom: 1px solid #eaeaea;">${reservation.nombre}</td>
        </tr>
        <tr>
          <td style="padding: 10px 0; border-bottom: 1px solid #eaeaea; color: #666;">Teléfono</td>
          <td style="padding: 10px 0; border-bottom: 1px solid #eaeaea;">${reservation.telefono}</td>
        </tr>
        <tr>
          <td style="padding: 10px 0; border-bottom: 1px solid #eaeaea; color: #666;">Fecha de la boda</td>
          <td style="padding: 10px 0; border-bottom: 1px solid #eaeaea;">${reservation.fechaBoda}</td>
        </tr>
        <tr>
          <td style="padding: 10px 0; border-bottom: 1px solid #eaeaea; color: #666;">Estilo</td>
          <td style="padding: 10px 0; border-bottom: 1px solid #eaeaea;">${reservation.estiloPreferido}</td>
        </tr>
        <tr>
          <td style="padding: 10px 0; border-bottom: 1px solid #eaeaea; color: #666;">Color</td>
          <td style="padding: 10px 0; border-bottom: 1px solid #eaeaea;">${reservation.colorPreferido}</td>
        </tr>
        <tr>
          <td style="padding: 10px 0; color: #666;">Talle aproximado</td>
          <td style="padding: 10px 0;">${reservation.talleAproximado}</td>
        </tr>
      </table>
      <p style="margin-top: 28px; font-size: 13px; color: #666;">
        Contactala por WhatsApp para confirmar día y horario de la cita.
      </p>
    </div>
  `;
}
async function sendReservationEmail(reservation) {
    const resend = getResendClient();
    const to = process.env.NOTIFICATION_EMAIL;
    const from = process.env.RESEND_FROM;
    if (!to || !from) {
        throw new Error("Faltan NOTIFICATION_EMAIL o RESEND_FROM");
    }
    const { error } = await resend.emails.send({
        from,
        to: [
            to
        ],
        subject: `Nueva cita — ${reservation.nombre} | Kaelis Atelier`,
        html: buildReservationEmailHtml(reservation)
    });
    if (error) {
        throw new Error(error.message);
    }
}
}),
"[project]/lib/supabase.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createSupabaseAdmin",
    ()=>createSupabaseAdmin,
    "getSupabaseConfigError",
    ()=>getSupabaseConfigError,
    "isSupabaseConfigured",
    ()=>isSupabaseConfigured
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/supabase-js/dist/index.mjs [app-route] (ecmascript) <locals>");
;
const PLACEHOLDER_PATTERNS = [
    /xxxx/i,
    /tu-proyecto/i,
    /pegá_acá/i,
    /example/i,
    /\.{3}$/,
    /^eyJ\.\.\.$/i,
    /^re_\.\.\.$/i
];
function looksLikePlaceholder(value) {
    if (!value) return true;
    return PLACEHOLDER_PATTERNS.some((pattern)=>pattern.test(value.trim()));
}
function getSupabaseConfigError() {
    const url = ("TURBOPACK compile-time value", "https://njnempqdgrzbohlmxtde.supabase.co")?.trim();
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
function createSupabaseAdmin() {
    const configError = getSupabaseConfigError();
    if (configError) {
        throw new Error(configError);
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(("TURBOPACK compile-time value", "https://njnempqdgrzbohlmxtde.supabase.co").trim(), process.env.SUPABASE_SERVICE_ROLE_KEY.trim(), {
        auth: {
            autoRefreshToken: false,
            persistSession: false
        }
    });
}
function isSupabaseConfigured() {
    return getSupabaseConfigError() === null;
}
}),
"[project]/services/reservation.server.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "mapReservationToRow",
    ()=>mapReservationToRow,
    "saveReservation",
    ()=>saveReservation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/supabase.js [app-route] (ecmascript)");
;
function mapReservationToRow(payload) {
    return {
        nombre: payload.nombre,
        telefono: payload.telefono,
        fecha_boda: payload.fechaBoda,
        estilo_preferido: payload.estiloPreferido,
        color_preferido: payload.colorPreferido,
        talle_aproximado: payload.talleAproximado,
        source: payload.source || "chatbot"
    };
}
async function saveReservation(payload) {
    const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createSupabaseAdmin"])();
    const row = mapReservationToRow(payload);
    const { data, error } = await supabase.from("reservations").insert(row).select("id, created_at").single();
    if (error) {
        throw new Error(error.message);
    }
    return data;
}
}),
"[project]/app/api/reservation/route.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$email$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/email.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/supabase.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$reservation$2e$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/services/reservation.server.js [app-route] (ecmascript)");
;
;
;
;
const REQUIRED_FIELDS = [
    "nombre",
    "telefono",
    "fechaBoda",
    "estiloPreferido",
    "colorPreferido",
    "talleAproximado"
];
async function POST(request) {
    try {
        const configError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getSupabaseConfigError"])();
        if (configError) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                ok: false,
                message: configError
            }, {
                status: 503
            });
        }
        const body = await request.json();
        const missing = REQUIRED_FIELDS.filter((key)=>!body[key]);
        if (missing.length > 0) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                ok: false,
                message: `Faltan campos: ${missing.join(", ")}`
            }, {
                status: 400
            });
        }
        const reservation = {
            nombre: String(body.nombre).trim(),
            telefono: String(body.telefono).trim(),
            fechaBoda: String(body.fechaBoda).trim(),
            estiloPreferido: String(body.estiloPreferido).trim(),
            colorPreferido: String(body.colorPreferido).trim(),
            talleAproximado: String(body.talleAproximado).trim(),
            source: body.source || "chatbot"
        };
        const saved = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$reservation$2e$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["saveReservation"])(reservation);
        let emailSent = false;
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$email$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isResendConfigured"])()) {
            try {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$email$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sendReservationEmail"])(reservation);
                emailSent = true;
            } catch (emailError) {
                console.error("[reservation] error al enviar email:", emailError);
            }
        } else {
            console.warn("[reservation] Resend no configurado — cita guardada sin email");
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            ok: true,
            id: saved.id,
            emailSent,
            message: "Recibimos tu solicitud. Una asesora se va a comunicar con vos pronto."
        });
    } catch (error) {
        console.error("[reservation] error:", error);
        const isDev = ("TURBOPACK compile-time value", "development") === "development";
        const detail = error instanceof Error ? error.message : "Error al procesar la solicitud";
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            ok: false,
            message: ("TURBOPACK compile-time truthy", 1) ? detail : "TURBOPACK unreachable"
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__a854cb3a._.js.map