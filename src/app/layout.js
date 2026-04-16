import "../styles/globals.css";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

  export const metadata = {
    title: "ALDECOA",
    description: "Estrategas de Servicios Integrales",
  };

export default function RootLayout({ children }) {



  return (

    <html lang="es" className="dark">

      <head>

        <link
          href="https://fonts.googleapis.com/css2?family=Epilogue:wght@400;700;900&display=swap"
          rel="stylesheet"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;700;800&display=swap"
          rel="stylesheet"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
          rel="stylesheet"
        />

      </head>

      <body>

        <Navbar />

        {children}

        <WhatsAppButton />

        <Footer />

      </body>

    </html>

  );

}