import "../styles/globals.css";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

import { Epilogue, Manrope } from "next/font/google";

const epilogue = Epilogue({
  subsets: ["latin"],
  weight: ["400","700","900"]
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300","400","500","700","800"]
});

export const metadata = {
  title: "ALDECOA",
  description: "Estrategas de Servicios Integrales",
};

export default function RootLayout({ children }) {

  return (

    <html lang="es" className="dark">

      <body className={`${epilogue.className} ${manrope.className}`}>

        <Navbar />

        {children}

        <WhatsAppButton />

        <Footer />

      </body>

    </html>

  );

}