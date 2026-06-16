import type { Metadata } from "next";
import { Suspense } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nexvo Showcase",
  description: "Configurador de tienda online en tiempo real.",
  robots: { index: false, follow: false },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <Suspense fallback={null}>{children}</Suspense>
      </body>
    </html>
  );
}
