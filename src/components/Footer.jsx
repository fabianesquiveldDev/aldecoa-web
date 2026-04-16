export default function Footer() {

  return (

    <footer className="bg-[#0E0E0E] grid grid-cols-1 md:grid-cols-4 gap-12 px-8 py-16 w-full border-t border-white/5">

      {/* marca */}
      <div className="space-y-6">

        <span className="text-2xl font-black text-white uppercase font-headline tracking-tighter">

          ALDECOA

        </span>

        <p className="text-zinc-500 text-sm leading-relaxed">

          Expertos en detonar marcas en el sureste mexicano.
          Estrategia y ejecución bajo una misma visión.

        </p>

      </div>


      {/* navegación */}
      <div className="space-y-6">

        <h5 className="text-white font-bold uppercase text-xs tracking-[0.2em]">

          Navegación

        </h5>

        <ul className="space-y-4">

          <li>
            <a href="#inicio" className="text-zinc-500 hover:text-red-600 transition-colors text-sm">
              Inicio
            </a>
          </li>

          <li>
            <a href="#nosotros" className="text-zinc-500 hover:text-red-600 transition-colors text-sm">
              Nosotros
            </a>
          </li>

          <li>
            <a href="#servicios" className="text-zinc-500 hover:text-red-600 transition-colors text-sm">
              Servicios
            </a>
          </li>

          <li>
            <a href="#portfolio" className="text-zinc-500 hover:text-red-600 transition-colors text-sm">
              Portfolio
            </a>
          </li>

        </ul>

      </div>


      {/* legal */}
      <div className="space-y-6">

        <h5 className="text-white font-bold uppercase text-xs tracking-[0.2em]">

          Legal

        </h5>

        <ul className="space-y-4">

          <li>
            <a href="#" className="text-zinc-500 hover:text-red-600 transition-colors text-sm">
              Aviso de privacidad
            </a>
          </li>

          <li>
            <a href="#" className="text-zinc-500 hover:text-red-600 transition-colors text-sm">
              Términos y condiciones
            </a>
          </li>

        </ul>

      </div>


      {/* copyright */}
      <div className="space-y-6">

        <h5 className="text-white font-bold uppercase text-xs tracking-[0.2em]">

          Copyright

        </h5>

        <p className="text-zinc-500 text-xs leading-relaxed">

          © 2025 ALDECOA.
          Todos los derechos reservados.

        </p>

      </div>

    </footer>

  );

}