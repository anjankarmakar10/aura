import { Inter } from "next/font/google";
import "./reset.css";
import "./globals.css";
import Container from "@/components/Container/Container";
import Navbar from "@/components/Navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Aura",
  description: "Aura",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Container>
          <Navbar />
        </Container>
        {children}
      </body>
    </html>
  );
}
