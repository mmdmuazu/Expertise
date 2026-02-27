import "../styles/globals.css";
import { ReactNode } from "react";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";

export const metadata = {
  title: "Expertise Hub Empowerment Foundation",
  description: "Empowering Northern Nigeria’s Youth",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 antialiased font-sans">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
