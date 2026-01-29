import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sweetie Fresh - Juice & Dessert Segar",
  description: "Nikmati juice dan dessert segar dari buah pilihan berkualitas tinggi. Sehat, lezat, dan menyegarkan untuk gaya hidup aktif Anda.",
  keywords: ["juice", "jus segar", "dessert", "minuman sehat", "buah segar", "Jakarta"],
  authors: [{ name: "Sweetie Fresh" }],
  openGraph: {
    title: "Sweetie Fresh - Juice & Dessert Segar",
    description: "Nikmati juice dan dessert segar dari buah pilihan berkualitas tinggi",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
