import { Playfair_Display, Poppins } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Chatbot } from "@/components/chatbot/Chatbot";
import { JsonLd } from "@/components/seo/JsonLd";
import { SITE } from "@/constants/site";
import "./globals.css";
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-poppins",
  display: "swap",
});
export const metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} | Vestidos de novia`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    "vestidos de novia",
    "venta vestidos de novia Uruguay",
    "Kaelis Atelier",
    "novias Montevideo",
    "atelier de novias",
    "vestidos de boda",
  ],
  authors: [{ name: SITE.name }],
  creator: SITE.name,
  publisher: SITE.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: SITE.locale,
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} | Encontrá tu vestido de novia`,
    description: SITE.description,
    images: [
      {
        url: SITE.ogImage,
        width: 1200,
        height: 630,
        alt: `${SITE.name} — venta de vestidos de novia`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} | Encontrá tu vestido de novia`,
    description: SITE.description,
    images: [SITE.ogImage],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
};
export const viewport = {
  themeColor: "#FFFFFF",
  width: "device-width",
  initialScale: 1,
};
export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body
        className={`${playfair.variable} ${poppins.variable} font-sans antialiased`}
      >
        <JsonLd />
        <a
          href="#contenido-principal"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:bg-white focus:px-4 focus:py-2 focus:text-kaelis-ink"
        >
          Saltar al contenido
        </a>
        <Navbar />
        <main id="contenido-principal">{children}</main>
        <Footer />
        <Chatbot />
      </body>
    </html>
  );
}
