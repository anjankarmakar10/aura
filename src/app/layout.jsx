import { Inter } from "next/font/google";
import "./reset.css";
import "./globals.css";
import Container from "@/components/Container/Container";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Aura",
  description: "Aura",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo-white.svg" sizes="any" />
      </head>
      <body className={inter.className}>
        <Container>
          <Navbar />
        </Container>
        {children}
        <Footer />
      </body>
    </html>
  );
}
