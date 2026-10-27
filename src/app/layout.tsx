import type { Metadata } from "next";
import "./globals.css";
import "./ornaments.css";
export const metadata: Metadata = {
  metadataBase: new URL("https://nazzil-tiara.vercel.app"),

  title: "The Wedding of Nazzil & Tiara",

  description:
    "Undangan Pernikahan Nazzil & Tiara. Minggu, 22 November 2026.",

  openGraph: {
    title: "The Wedding of Nazzil & Tiara",
    description:
      "Dengan penuh kebahagiaan, kami mengundang Anda untuk hadir di pernikahan kami pada 22 November 2026.",
    url: "https://nazzil-tiara.vercel.app/",
    siteName: "Nazzil & Tiara Wedding",
    type: "website",
    locale: "id_ID",
    images: [
      {
        url: "/images/preview-undangan.jpg",
        width: 1200,
        height: 630,
        alt: "Foto Pernikahan Nazzil dan Tiara",
      },
    ],
  },
icons: {
    icon: [
      {
        url: "/icon.png",
        type: "image/png",
        sizes: "512x512",
      },
    ],
    apple: "/icon.png",
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/preview-undangan.jpg"],
  },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="id"><body>{children}</body></html>;
}
