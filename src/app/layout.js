import { Inter } from "next/font/google";
import Navbar from "../components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SYX Global Services", 
  description: "Somos una plataforma para todos.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
