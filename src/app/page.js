import Hero from "@/sections/Hero";
import Nosotros from "@/sections/Nosotros";
import Servicios from "@/sections/Servicios";
import PorqueElegirnos from "@/sections/PorqueElegirnos";
import PortfolioPreview from "@/sections/PortfolioPreview";
import Clientes from "@/sections/clientes";
import Contacto from "@/sections/Contacto";
import Testimonios from "@/sections/Testimonios";
import Cobertura from "@/sections/Cobertura";

export default function Home() {

  return (

    <>
      <Hero />
      <Nosotros />
      <Servicios />
      <PorqueElegirnos />
      <PortfolioPreview />
      <Clientes />
      <Testimonios />
      <Cobertura />
      <Contacto />
    </>

  );

}