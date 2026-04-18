import siteData from '../data/site.json';

export default function Footer() {

  const navItems = siteData.navigation;

  return (

    <footer className="
      bg-[#0E0E0E]
      border-t border-white/5
      w-full
    ">

      <div className="
        max-w-7xl
        mx-auto
        px-6 sm:px-8
        py-14 sm:py-16
        grid
        gap-12
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-4
      ">

        {/* marca */}
        <div className="
          space-y-5
          text-center
          sm:text-left
        ">

          <span className="
            block
            text-2xl
            font-black
            text-white
            uppercase
            tracking-tight
          ">

            ALDECOA

          </span>

          <p className="
            text-zinc-400
            text-sm
            leading-relaxed
            max-w-xs
            mx-auto
            sm:mx-0
          ">

            Expertos en detonar marcas en el sureste mexicano.
            Estrategia y ejecución bajo una misma visión.

          </p>

        </div>



        {/* navegación */}
        <div className="
          space-y-5
          text-center
          sm:text-left
        ">

          <h5 className="
            text-white
            font-semibold
            uppercase
            text-xs
            tracking-[0.25em]
          ">

            Navegación

          </h5>

          <ul className="space-y-3">

            <li>
              <a href={`/${navItems[0].href}`} className="footer-link">
                Inicio
              </a>
            </li>

            <li>
              <a href={`/${navItems[1].href}`} className="footer-link">
                Nosotros
              </a>
            </li>

            <li>
              <a href={`/${navItems[2].href}`} className="footer-link">
                Servicios
              </a>
            </li>

            <li>
              <a href={`/${navItems[3].href}`} className="footer-link">
                Portafolio
              </a>
            </li>

            <li>
              <a href={`/${navItems[4].href}`} className="footer-link">
                Clientes
              </a>
            </li>

            <li>
              <a href={`/${navItems[5].href}`} className="footer-link">
                Cobertura
              </a>
            </li>

            <li>
              <a href={`/${navItems[6].href}`} className="footer-link">
                Contacto
              </a>
            </li>

          </ul>

        </div>



        {/* legal */}
        <div className="
          space-y-5
          text-center
          sm:text-left
        ">

          <h5 className="
            text-white
            font-semibold
            uppercase
            text-xs
            tracking-[0.25em]
          ">

            Legal

          </h5>

          <ul className="space-y-3">

            <li>
              <a href="/aviso-de-privacidad" className="footer-link">
                Aviso de privacidad
              </a>
            </li>

            <li>
              <a href="/terminos-y-condiciones" className="footer-link">
                Términos y condiciones
              </a>
            </li>

          </ul>

        </div>



        {/* copyright */}
        <div className="
          space-y-5
          text-center
          sm:text-left
        ">

          <h5 className="
            text-white
            font-semibold
            uppercase
            text-xs
            tracking-[0.25em]
          ">

            Copyright

          </h5>

          <p className="
            text-zinc-400
            text-xs
            leading-relaxed
          ">

            © {new Date().getFullYear()} ALDECOA.
            <br />
            Todos los derechos reservados.

          </p>

        </div>

      </div>



    </footer>

  );

}