module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

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
"[project]/constants/navigation.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NAV_ITEMS",
    ()=>NAV_ITEMS
]);
const NAV_ITEMS = [
    {
        label: "Inicio",
        href: "#inicio"
    },
    {
        label: "Novias",
        href: "#vestidos"
    },
    {
        label: "Nuestra Historia",
        href: "#historia"
    },
    {
        label: "Preguntas",
        href: "#preguntas"
    },
    {
        label: "Contacto",
        href: "#contacto"
    }
];
}),
"[project]/lib/appointments.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "openAppointmentChat",
    ()=>openAppointmentChat
]);
function openAppointmentChat() {
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
}
}),
"[project]/hooks/useScrollPosition.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useScrollPosition",
    ()=>useScrollPosition
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
function useScrollPosition(threshold = 40) {
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const onScroll = ()=>{
            setScrolled(window.scrollY > threshold);
        };
        onScroll();
        window.addEventListener("scroll", onScroll, {
            passive: true
        });
        return ()=>window.removeEventListener("scroll", onScroll);
    }, [
        threshold
    ]);
    return scrolled;
}
}),
"[project]/lib/utils.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Minimal className merger without external deps.
 */ __turbopack_context__.s([
    "cn",
    ()=>cn,
    "generateId",
    ()=>generateId,
    "scrollToId",
    ()=>scrollToId
]);
function cn(...inputs) {
    return inputs.filter(Boolean).join(" ");
}
function generateId(prefix = "id") {
    return `${prefix}-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}
function scrollToId(id) {
    const el = document.getElementById(id.replace("#", ""));
    if (el) {
        el.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }
}
}),
"[project]/components/ui/Button.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.js [app-ssr] (ecmascript)");
;
;
;
const variants = {
    primary: "bg-kaelis-secondary text-kaelis-ink hover:bg-kaelis-hover border border-transparent",
    secondary: "bg-white text-kaelis-ink border border-kaelis-ink/15 hover:border-kaelis-hover hover:text-kaelis-hover",
    ghost: "bg-transparent text-kaelis-ink hover:text-kaelis-hover",
    outline: "bg-transparent text-white border border-white/70 hover:bg-white hover:text-kaelis-ink"
};
const sizes = {
    sm: "px-4 py-2 text-xs tracking-[0.12em]",
    md: "px-6 py-3 text-sm tracking-[0.14em]",
    lg: "px-8 py-3.5 text-sm tracking-[0.16em]"
};
function handleHashClick(event, href, onClick) {
    event.preventDefault();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["scrollToId"])(href);
    onClick?.(event);
}
function Button(props) {
    const { children, className, variant = "primary", size = "md", fullWidth } = props;
    const classes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("inline-flex items-center justify-center uppercase font-medium transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-kaelis-secondary focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none", variants[variant], sizes[size], fullWidth && "w-full", className);
    if ("href" in props && props.href) {
        if (props.href.startsWith("#")) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: props.href,
                onClick: (event)=>handleHashClick(event, props.href, props.onClick),
                "aria-label": props["aria-label"],
                className: classes,
                children: children
            }, void 0, false, {
                fileName: "[project]/components/ui/Button.jsx",
                lineNumber: 46,
                columnNumber: 9
            }, this);
        }
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            href: props.href,
            target: props.target,
            rel: props.rel,
            onClick: props.onClick,
            "aria-label": props["aria-label"],
            className: classes,
            children: children
        }, void 0, false, {
            fileName: "[project]/components/ui/Button.jsx",
            lineNumber: 58,
            columnNumber: 7
        }, this);
    }
    const buttonProps = props;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: buttonProps.type ?? "button",
        onClick: buttonProps.onClick,
        disabled: buttonProps.disabled,
        "aria-label": buttonProps["aria-label"],
        className: classes,
        children: children
    }, void 0, false, {
        fileName: "[project]/components/ui/Button.jsx",
        lineNumber: 74,
        columnNumber: 5
    }, this);
}
}),
"[project]/constants/site.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SITE",
    ()=>SITE
]);
const SITE = {
    name: "Kaelis Atelier",
    tagline: "Vestidos de novia elegantes y accesibles",
    description: "Venta de vestidos de novia elegantes, modernos y accesibles en Uruguay. Agendá tu cita y encontrá el vestido perfecto para tu boda.",
    url: "https://kaelisatelier.com",
    locale: "es_UY",
    phone: "+59898552330",
    phoneDisplay: "098 552 330",
    email: "hola@kaelisatelier.com",
    whatsapp: "https://wa.me/59898552330",
    instagram: "https://www.instagram.com/kaelis.uy/",
    instagramHandle: "@kaelis.uy",
    address: {
        street: "Montevideo",
        city: "Montevideo",
        region: "Montevideo",
        country: "UY"
    },
    ogImage: "/og-image.png",
    logo: "/logo-light.png",
    logoDark: "/logo-dark.png"
};
}),
"[project]/components/ui/Logo.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Logo",
    ()=>Logo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$site$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/constants/site.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.js [app-ssr] (ecmascript)");
;
;
;
;
const LOGO_SRC = {
    light: "/logo-light.png",
    dark: "/logo-dark.png"
};
function Logo({ className, height = 52, priority = false, variant = "light", withShadow = false }) {
    const src = LOGO_SRC[variant] ?? LOGO_SRC.light;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        src: src,
        alt: `${__TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$site$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SITE"].name} — vestidos de novia`,
        width: Math.round(height * 1.8),
        height: height,
        priority: priority,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("h-auto w-auto max-w-none object-contain object-left", withShadow && "drop-shadow-[0_2px_12px_rgba(0,0,0,0.4)]", className),
        style: {
            height: `${height}px`,
            width: "auto"
        }
    }, void 0, false, {
        fileName: "[project]/components/ui/Logo.jsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/ui/BrandLink.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BrandLink",
    ()=>BrandLink
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Logo$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/Logo.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function BrandLink({ className, onNavigate, priority = false, scrolled = false }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        href: "#inicio",
        onClick: (event)=>{
            event.preventDefault();
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["scrollToId"])("#inicio");
            onNavigate?.();
        },
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("inline-flex shrink-0 items-center", className),
        "aria-label": "Kaelis Atelier — inicio",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Logo$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logo"], {
            height: 64,
            priority: priority,
            variant: "light",
            withShadow: !scrolled,
            className: "h-16 w-auto sm:h-[4.5rem]"
        }, void 0, false, {
            fileName: "[project]/components/ui/BrandLink.jsx",
            lineNumber: 24,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ui/BrandLink.jsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/layout/Navbar.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Navbar",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.mjs [app-ssr] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.mjs [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/constants/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$appointments$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/appointments.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useScrollPosition$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useScrollPosition.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Button$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/Button.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$BrandLink$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/BrandLink.jsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
;
function Navbar() {
    const scrolled = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useScrollPosition$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useScrollPosition"])(24);
    const [mobileOpen, setMobileOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleNavClick = (event, href)=>{
        if (!href.startsWith("#")) return;
        event.preventDefault();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["scrollToId"])(href);
        setMobileOpen(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("fixed inset-x-0 top-0 z-50 transition-all duration-500", scrolled ? "bg-white/95 shadow-[0_1px_0_rgba(17,17,17,0.06)] backdrop-blur-md" : "bg-transparent"),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                "aria-label": "Principal",
                className: "mx-auto flex h-[4.5rem] max-w-6xl items-center justify-between px-5 sm:h-24 sm:px-8 lg:px-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$BrandLink$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BrandLink"], {
                        priority: true,
                        scrolled: scrolled,
                        onNavigate: ()=>setMobileOpen(false)
                    }, void 0, false, {
                        fileName: "[project]/components/layout/Navbar.jsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "hidden items-center gap-8 lg:flex",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NAV_ITEMS"].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: item.href,
                                    onClick: (event)=>handleNavClick(event, item.href),
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-xs uppercase tracking-[0.18em] transition-colors", scrolled ? "text-kaelis-muted hover:text-kaelis-ink" : "text-white/85 hover:text-white"),
                                    children: item.label
                                }, void 0, false, {
                                    fileName: "[project]/components/layout/Navbar.jsx",
                                    lineNumber: 45,
                                    columnNumber: 15
                                }, this)
                            }, item.href, false, {
                                fileName: "[project]/components/layout/Navbar.jsx",
                                lineNumber: 44,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/layout/Navbar.jsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden lg:block",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Button$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                            size: "sm",
                            onClick: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$appointments$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["openAppointmentChat"],
                            className: scrolled ? undefined : "border-white/50 bg-white/10 text-white hover:bg-white hover:text-kaelis-ink",
                            children: "Agendar cita"
                        }, void 0, false, {
                            fileName: "[project]/components/layout/Navbar.jsx",
                            lineNumber: 62,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/layout/Navbar.jsx",
                        lineNumber: 61,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("inline-flex h-10 w-10 items-center justify-center lg:hidden", scrolled ? "text-kaelis-ink" : "text-white"),
                        "aria-label": mobileOpen ? "Cerrar menú" : "Abrir menú",
                        "aria-expanded": mobileOpen,
                        onClick: ()=>setMobileOpen((v)=>!v),
                        children: mobileOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                            className: "h-5 w-5"
                        }, void 0, false, {
                            fileName: "[project]/components/layout/Navbar.jsx",
                            lineNumber: 86,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                            className: "h-5 w-5"
                        }, void 0, false, {
                            fileName: "[project]/components/layout/Navbar.jsx",
                            lineNumber: 88,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/layout/Navbar.jsx",
                        lineNumber: 75,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/layout/Navbar.jsx",
                lineNumber: 32,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: mobileOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: -8
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    exit: {
                        opacity: 0,
                        y: -8
                    },
                    transition: {
                        duration: 0.25
                    },
                    className: "border-t border-kaelis-border bg-white lg:hidden",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "flex flex-col gap-1 px-5 py-6",
                        children: [
                            __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NAV_ITEMS"].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: item.href,
                                        onClick: (event)=>handleNavClick(event, item.href),
                                        className: "block py-3 text-sm uppercase tracking-[0.16em] text-kaelis-ink",
                                        children: item.label
                                    }, void 0, false, {
                                        fileName: "[project]/components/layout/Navbar.jsx",
                                        lineNumber: 105,
                                        columnNumber: 19
                                    }, this)
                                }, item.href, false, {
                                    fileName: "[project]/components/layout/Navbar.jsx",
                                    lineNumber: 104,
                                    columnNumber: 17
                                }, this)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "pt-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Button$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    fullWidth: true,
                                    onClick: ()=>{
                                        setMobileOpen(false);
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$appointments$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["openAppointmentChat"])();
                                    },
                                    children: "Agendar cita"
                                }, void 0, false, {
                                    fileName: "[project]/components/layout/Navbar.jsx",
                                    lineNumber: 115,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/layout/Navbar.jsx",
                                lineNumber: 114,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/layout/Navbar.jsx",
                        lineNumber: 102,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/layout/Navbar.jsx",
                    lineNumber: 95,
                    columnNumber: 11
                }, this) : null
            }, void 0, false, {
                fileName: "[project]/components/layout/Navbar.jsx",
                lineNumber: 93,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/layout/Navbar.jsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
}),
"[project]/constants/chat.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CHAT_WELCOME_MESSAGE",
    ()=>CHAT_WELCOME_MESSAGE,
    "QUICK_REPLIES",
    ()=>QUICK_REPLIES,
    "RESERVATION_PROMPTS",
    ()=>RESERVATION_PROMPTS,
    "RESERVATION_STEPS_ORDER",
    ()=>RESERVATION_STEPS_ORDER,
    "createWelcomeMessage",
    ()=>createWelcomeMessage
]);
const CHAT_WELCOME_MESSAGE = "¡Hola! Soy la asistente virtual de Kaelis Atelier ✨\n\nEstoy para ayudarte a encontrar tu vestido de novia ideal.\n\nPodés consultarme modelos, talles, citas o cualquier duda.";
const QUICK_REPLIES = [
    {
        id: "1",
        label: "Agendar una cita",
        action: "reservar"
    },
    {
        id: "2",
        label: "Consultar un modelo",
        action: "disponibilidad"
    },
    {
        id: "3",
        label: "Ver talles",
        action: "talles"
    },
    {
        id: "4",
        label: "Hablar con una asesora",
        action: "asesora"
    }
];
const RESERVATION_PROMPTS = {
    nombre: "Perfecto. Para agendar tu cita, ¿cuál es tu nombre?",
    telefono: "Gracias. ¿Cuál es tu número de teléfono?",
    fecha: "¿Cuál es la fecha de tu boda?",
    estilo: "¿Qué estilo de vestido te gusta? (encaje, clásico, moderno, con perlas, otro)\n\nTodos nuestros vestidos son blancos.",
    talle: "¿Cuál es tu talle aproximado?"
};
const RESERVATION_STEPS_ORDER = [
    "nombre",
    "telefono",
    "fecha",
    "estilo",
    "talle",
    "confirmacion"
];
function createWelcomeMessage() {
    return {
        id: "welcome",
        role: "assistant",
        content: CHAT_WELCOME_MESSAGE,
        timestamp: Date.now()
    };
}
}),
"[project]/lib/chat.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Cliente de chat preparado para OpenAI.
 */ __turbopack_context__.s([
    "buildKaelisSystemPrompt",
    ()=>buildKaelisSystemPrompt,
    "sendChatMessage",
    ()=>sendChatMessage
]);
async function sendChatMessage(request) {
    // const response = await fetch("/api/chat", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(request),
    // });
    //
    // if (!response.ok) {
    //   throw new Error("No se pudo obtener respuesta del asistente");
    // }
    //
    // return response.json();
    void request;
    return {
        message: "Gracias por tu mensaje. Pronto voy a poder ayudarte con inteligencia artificial. Mientras tanto, usá las opciones rápidas o escribinos por WhatsApp."
    };
}
function buildKaelisSystemPrompt() {
    return [
        "Sos la asistente virtual de Kaelis Atelier, un atelier de venta de vestidos de novia en Uruguay.",
        "Tu tono es cálido, elegante, cercano y profesional. Hablás en español rioplatense.",
        "Ayudás a consultar modelos, talles, citas y dudas sobre vestidos de novia.",
        "No inventes precios ni stock exacto. Si no sabés algo, invitá a hablar con una asesora.",
        "El objetivo principal es generar confianza y facilitar el agendado de una cita."
    ].join(" ");
}
}),
"[project]/services/chat.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "askAssistant",
    ()=>askAssistant
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$chat$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/chat.js [app-ssr] (ecmascript)");
;
async function askAssistant(request) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$chat$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sendChatMessage"])(request);
}
}),
"[project]/services/reservation.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Servicio de citas (cliente).
 * Envía los datos a POST /api/reservation → Supabase + Resend.
 */ __turbopack_context__.s([
    "isReservationComplete",
    ()=>isReservationComplete,
    "submitReservation",
    ()=>submitReservation
]);
async function submitReservation(data) {
    const payload = {
        ...data,
        source: "chatbot",
        createdAt: new Date().toISOString()
    };
    const response = await fetch("/api/reservation", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
    });
    const result = await response.json().catch(()=>({}));
    if (!response.ok) {
        throw new Error(result.message || "No se pudo enviar la solicitud");
    }
    return result;
}
function isReservationComplete(data) {
    return Boolean(data.nombre && data.telefono && data.fechaBoda && data.estiloPreferido && data.talleAproximado);
}
}),
"[project]/hooks/useChatbot.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useChatbot",
    ()=>useChatbot
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$chat$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/constants/chat.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$site$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/constants/site.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$chat$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/services/chat.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$reservation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/services/reservation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
const emptyReservation = {};
function useChatbot() {
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$chat$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWelcomeMessage"])()
    ]);
    const [input, setInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [isTyping, setIsTyping] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showQuickReplies, setShowQuickReplies] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [reservationStep, setReservationStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("idle");
    const [reservationData, setReservationData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(emptyReservation);
    const pushAssistant = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((content)=>{
        setMessages((prev)=>[
                ...prev,
                {
                    id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateId"])("assistant"),
                    role: "assistant",
                    content,
                    timestamp: Date.now()
                }
            ]);
    }, []);
    const pushUser = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((content)=>{
        setMessages((prev)=>[
                ...prev,
                {
                    id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateId"])("user"),
                    role: "user",
                    content,
                    timestamp: Date.now()
                }
            ]);
    }, []);
    const startReservation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setShowQuickReplies(false);
        setReservationStep("nombre");
        setReservationData(emptyReservation);
        pushAssistant(__TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$chat$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RESERVATION_PROMPTS"].nombre);
    }, [
        pushAssistant
    ]);
    const handleQuickAction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((action)=>{
        const labels = {
            reservar: "Agendar una cita",
            disponibilidad: "Consultar un modelo",
            talles: "Ver talles",
            asesora: "Hablar con una asesora"
        };
        pushUser(labels[action]);
        setShowQuickReplies(false);
        if (action === "reservar") {
            startReservation();
            return;
        }
        if (action === "disponibilidad") {
            pushAssistant("Para consultar un modelo, contame el vestido que te interesa y la fecha de tu boda. También podés escribirnos por WhatsApp y te respondemos a la brevedad.");
            setShowQuickReplies(true);
            return;
        }
        if (action === "talles") {
            pushAssistant("Trabajamos con talles aproximados del XS al XL. En la cita te ayudamos a encontrar el ajuste ideal y, si hace falta, coordinamos arreglos.");
            setShowQuickReplies(true);
            return;
        }
        pushAssistant(`Perfecto. Podés hablar directamente con una asesora por WhatsApp: ${__TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$site$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SITE"].whatsapp}\n\nTambién estamos en Instagram: ${__TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$site$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SITE"].instagramHandle}`);
        setShowQuickReplies(true);
    }, [
        pushAssistant,
        pushUser,
        startReservation
    ]);
    const advanceReservation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (value)=>{
        const trimmed = value.trim();
        if (!trimmed) return;
        const stepFieldMap = {
            nombre: "nombre",
            telefono: "telefono",
            fecha: "fechaBoda",
            estilo: "estiloPreferido",
            talle: "talleAproximado"
        };
        if (reservationStep === "idle" || reservationStep === "confirmacion" || reservationStep === "enviado") {
            return;
        }
        const field = stepFieldMap[reservationStep];
        const nextData = {
            ...reservationData,
            [field]: trimmed
        };
        setReservationData(nextData);
        const order = [
            "nombre",
            "telefono",
            "fecha",
            "estilo",
            "talle"
        ];
        const currentIndex = order.indexOf(reservationStep);
        const nextStep = order[currentIndex + 1];
        if (nextStep) {
            setReservationStep(nextStep);
            pushAssistant(__TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$chat$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RESERVATION_PROMPTS"][nextStep]);
            return;
        }
        setReservationStep("confirmacion");
        setIsTyping(true);
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$reservation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["submitReservation"])(nextData);
            pushAssistant(`¡Listo, ${nextData.nombre}! Recibimos tu solicitud de cita.\n\nResumen:\n• Teléfono: ${nextData.telefono}\n• Fecha de la boda: ${nextData.fechaBoda}\n• Estilo: ${nextData.estiloPreferido}\n• Talle: ${nextData.talleAproximado}\n\nUna asesora se va a comunicar con vos para confirmar el día y horario.\n\n¿Te puedo ayudar con algo más?`);
            setReservationStep("idle");
            setReservationData(emptyReservation);
            setShowQuickReplies(true);
        } catch (error) {
            setReservationStep("idle");
            const detail = error instanceof Error && error.message ? error.message : "Error desconocido";
            pushAssistant(`Hubo un inconveniente al enviar tu solicitud.\n\nDetalle: ${detail}\n\nPodés intentarlo de nuevo o escribirnos por WhatsApp.`);
            setShowQuickReplies(true);
        } finally{
            setIsTyping(false);
        }
    }, [
        pushAssistant,
        reservationData,
        reservationStep
    ]);
    const sendMessage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
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
            const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$chat$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["askAssistant"])({
                messages: [
                    ...messages,
                    {
                        id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateId"])("user"),
                        role: "user",
                        content: text,
                        timestamp: Date.now()
                    }
                ],
                context: {
                    reservationStep,
                    reservationData
                }
            });
            pushAssistant(response.message);
            setShowQuickReplies(true);
        } catch  {
            pushAssistant("No pude procesar tu mensaje ahora. Probá las opciones rápidas o escribinos por WhatsApp.");
            setShowQuickReplies(true);
        } finally{
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
        reservationStep
    ]);
    const resetConversation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setMessages([
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$chat$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWelcomeMessage"])()
        ]);
        setInput("");
        setIsTyping(false);
        setShowQuickReplies(true);
        setReservationStep("idle");
        setReservationData(emptyReservation);
    }, []);
    const open = ()=>setIsOpen(true);
    const close = ()=>setIsOpen(false);
    const toggle = ()=>setIsOpen((v)=>!v);
    const isInReservationFlow = reservationStep !== "idle" && reservationStep !== "enviado" && reservationStep !== "confirmacion";
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
        quickReplies: __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$chat$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["QUICK_REPLIES"],
        handleQuickAction,
        sendMessage,
        reservationStep
    };
}
}),
"[project]/components/chatbot/Chatbot.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Chatbot",
    ()=>Chatbot
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-circle.mjs [app-ssr] (ecmascript) <export default as MessageCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/rotate-ccw.mjs [app-ssr] (ecmascript) <export default as RotateCcw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/send.mjs [app-ssr] (ecmascript) <export default as Send>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.mjs [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useChatbot$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useChatbot.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
function QuickReplies({ replies, onSelect }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-wrap gap-2 px-4 pb-3",
        children: replies.map((reply)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: ()=>onSelect(reply.action),
                className: "rounded-full border border-kaelis-border bg-white px-3 py-1.5 text-left text-xs text-kaelis-ink transition-colors hover:border-kaelis-hover hover:bg-kaelis-secondary/30",
                children: reply.label
            }, reply.id, false, {
                fileName: "[project]/components/chatbot/Chatbot.jsx",
                lineNumber: 11,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/components/chatbot/Chatbot.jsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
function Chatbot() {
    const { isOpen, open, toggle, close, messages, input, setInput, isTyping, showQuickReplies, quickReplies, handleQuickAction, sendMessage, resetConversation } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useChatbot$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useChatbot"])();
    const messagesEndRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        messagesEndRef.current?.scrollIntoView({
            behavior: "smooth"
        });
    }, [
        messages,
        isTyping
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const onAgendarCita = ()=>{
            open();
            handleQuickAction("reservar");
        };
        window.addEventListener("kaelis:agendar-cita", onAgendarCita);
        return ()=>window.removeEventListener("kaelis:agendar-cita", onAgendarCita);
    }, [
        open,
        handleQuickAction
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed bottom-5 right-5 z-[60] sm:bottom-7 sm:right-7",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: isOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: 16,
                        scale: 0.98
                    },
                    animate: {
                        opacity: 1,
                        y: 0,
                        scale: 1
                    },
                    exit: {
                        opacity: 0,
                        y: 12,
                        scale: 0.98
                    },
                    transition: {
                        duration: 0.25,
                        ease: "easeOut"
                    },
                    className: "mb-4 flex h-[min(560px,70vh)] w-[min(380px,calc(100vw-2.5rem))] flex-col overflow-hidden rounded-2xl border border-kaelis-border bg-white shadow-[0_20px_60px_rgba(17,17,17,0.12)]",
                    role: "dialog",
                    "aria-label": "Asistente virtual de Kaelis Atelier",
                    "aria-modal": "true",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between border-b border-kaelis-border bg-[#FAF8F5] px-4 py-3.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-display text-base text-kaelis-ink",
                                            children: "Asesora Kaelis"
                                        }, void 0, false, {
                                            fileName: "[project]/components/chatbot/Chatbot.jsx",
                                            lineNumber: 71,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-kaelis-muted",
                                            children: "Te ayudamos a encontrar tu vestido de novia"
                                        }, void 0, false, {
                                            fileName: "[project]/components/chatbot/Chatbot.jsx",
                                            lineNumber: 74,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/chatbot/Chatbot.jsx",
                                    lineNumber: 70,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: resetConversation,
                                            "aria-label": "Nueva conversación",
                                            title: "Nueva conversación",
                                            className: "rounded-full p-2 text-kaelis-muted transition-colors hover:bg-white hover:text-kaelis-ink",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"], {
                                                className: "h-4 w-4"
                                            }, void 0, false, {
                                                fileName: "[project]/components/chatbot/Chatbot.jsx",
                                                lineNumber: 86,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/chatbot/Chatbot.jsx",
                                            lineNumber: 79,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: close,
                                            "aria-label": "Cerrar chat",
                                            className: "rounded-full p-2 text-kaelis-muted transition-colors hover:bg-white hover:text-kaelis-ink",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                className: "h-4 w-4"
                                            }, void 0, false, {
                                                fileName: "[project]/components/chatbot/Chatbot.jsx",
                                                lineNumber: 94,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/chatbot/Chatbot.jsx",
                                            lineNumber: 88,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/chatbot/Chatbot.jsx",
                                    lineNumber: 78,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/chatbot/Chatbot.jsx",
                            lineNumber: 69,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 space-y-3 overflow-y-auto px-4 py-4",
                            "aria-live": "polite",
                            children: [
                                messages.map((message)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex", message.role === "user" ? "justify-end" : "justify-start"),
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("max-w-[85%] whitespace-pre-wrap rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed", message.role === "user" ? "rounded-br-md bg-kaelis-ink text-white" : "rounded-bl-md bg-[#F7F4EF] text-kaelis-ink"),
                                            children: message.content
                                        }, void 0, false, {
                                            fileName: "[project]/components/chatbot/Chatbot.jsx",
                                            lineNumber: 111,
                                            columnNumber: 19
                                        }, this)
                                    }, message.id, false, {
                                        fileName: "[project]/components/chatbot/Chatbot.jsx",
                                        lineNumber: 104,
                                        columnNumber: 17
                                    }, this)),
                                isTyping ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-start",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-2xl rounded-bl-md bg-[#F7F4EF] px-4 py-3 text-sm text-kaelis-muted",
                                        children: "Escribiendo…"
                                    }, void 0, false, {
                                        fileName: "[project]/components/chatbot/Chatbot.jsx",
                                        lineNumber: 126,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/chatbot/Chatbot.jsx",
                                    lineNumber: 125,
                                    columnNumber: 17
                                }, this) : null,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    ref: messagesEndRef
                                }, void 0, false, {
                                    fileName: "[project]/components/chatbot/Chatbot.jsx",
                                    lineNumber: 131,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/chatbot/Chatbot.jsx",
                            lineNumber: 99,
                            columnNumber: 13
                        }, this),
                        showQuickReplies ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "border-t border-kaelis-border/60",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(QuickReplies, {
                                replies: quickReplies,
                                onSelect: handleQuickAction
                            }, void 0, false, {
                                fileName: "[project]/components/chatbot/Chatbot.jsx",
                                lineNumber: 136,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/chatbot/Chatbot.jsx",
                            lineNumber: 135,
                            columnNumber: 15
                        }, this) : null,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            className: "flex items-center gap-2 border-t border-kaelis-border p-3",
                            onSubmit: (e)=>{
                                e.preventDefault();
                                void sendMessage();
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    htmlFor: "chat-input",
                                    className: "sr-only",
                                    children: "Escribí tu mensaje"
                                }, void 0, false, {
                                    fileName: "[project]/components/chatbot/Chatbot.jsx",
                                    lineNumber: 150,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    id: "chat-input",
                                    value: input,
                                    onChange: (e)=>setInput(e.target.value),
                                    placeholder: "Escribí tu mensaje…",
                                    className: "flex-1 rounded-full border border-kaelis-border bg-white px-4 py-2.5 text-sm text-kaelis-ink placeholder:text-kaelis-muted/70 focus:border-kaelis-secondary focus:outline-none focus:ring-2 focus:ring-kaelis-secondary/40",
                                    autoComplete: "off"
                                }, void 0, false, {
                                    fileName: "[project]/components/chatbot/Chatbot.jsx",
                                    lineNumber: 153,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    "aria-label": "Enviar mensaje",
                                    disabled: !input.trim() || isTyping,
                                    className: "inline-flex h-10 w-10 items-center justify-center rounded-full bg-kaelis-secondary text-kaelis-ink transition-colors hover:bg-kaelis-hover disabled:opacity-40",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/components/chatbot/Chatbot.jsx",
                                        lineNumber: 167,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/chatbot/Chatbot.jsx",
                                    lineNumber: 161,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/chatbot/Chatbot.jsx",
                            lineNumber: 143,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/chatbot/Chatbot.jsx",
                    lineNumber: 59,
                    columnNumber: 11
                }, this) : null
            }, void 0, false, {
                fileName: "[project]/components/chatbot/Chatbot.jsx",
                lineNumber: 57,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].button, {
                type: "button",
                onClick: toggle,
                "aria-label": isOpen ? "Cerrar asistente" : "Abrir asistente virtual",
                whileHover: {
                    scale: 1.04
                },
                whileTap: {
                    scale: 0.97
                },
                className: "ml-auto flex h-14 w-14 items-center justify-center rounded-full bg-kaelis-ink text-white shadow-[0_12px_30px_rgba(17,17,17,0.2)] transition-colors hover:bg-kaelis-hover",
                children: isOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                    className: "h-5 w-5"
                }, void 0, false, {
                    fileName: "[project]/components/chatbot/Chatbot.jsx",
                    lineNumber: 183,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"], {
                    className: "h-5 w-5"
                }, void 0, false, {
                    fileName: "[project]/components/chatbot/Chatbot.jsx",
                    lineNumber: 185,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/chatbot/Chatbot.jsx",
                lineNumber: 174,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/chatbot/Chatbot.jsx",
        lineNumber: 56,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__52fc7051._.js.map