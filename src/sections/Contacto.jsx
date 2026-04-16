export default function Contacto() {

  return (

    <section
      id="contacto"
      className="py-24 bg-surface-container-lowest"
    >

      <div className="container mx-auto px-8">

        <div className="grid lg:grid-cols-2 gap-20">


          {/* TEXTO */}
          <div>

            <h2
              className="
                text-5xl
                font-black
                font-headline
                text-white
                mb-8
                leading-none
                tracking-tighter
              "
            >
              ¿LISTO PARA QUE TU MARCA ESTÉ EN MOVIMIENTO?
            </h2>


            <p
              className="
                text-on-background/70
                text-xl
                mb-12
              "
            >
              Hablemos de tu próximo gran proyecto.
              Estamos listos para desplegar nuestra estrategia.
            </p>



            {/* contacto rapido */}
            <div className="space-y-6">


              {/* whatsapp */}
              <a
                href="https://wa.link/46cexs"
                className="
                  flex
                  items-center
                  gap-6
                  group
                "
              >

                <div
                  className="
                    w-12
                    h-12
                    border
                    border-red-600
                    flex
                    items-center
                    justify-center
                    group-hover:bg-red-600
                    transition-colors
                  "
                >
                  <span className="material-symbols-outlined text-red-600 group-hover:text-white">
                    chat
                  </span>
                </div>


                <span
                  className="
                    text-white
                    font-bold
                    tracking-widest
                    text-sm
                  "
                >
                  ESCRÍBENOS POR WHATSAPP
                </span>

              </a>



              {/* telefono */}
              <div
                className="
                  flex
                  items-center
                  gap-6
                  group
                "
              >

                <div
                  className="
                    w-12
                    h-12
                    border
                    border-red-600
                    flex
                    items-center
                    justify-center
                    group-hover:bg-red-600
                    transition-colors
                  "
                >
                  <span className="material-symbols-outlined text-red-600 group-hover:text-white">
                    call
                  </span>
                </div>


                <span
                  className="
                    text-white
                    font-bold
                    tracking-widest
                    text-sm
                  "
                >
                  993 461 8119
                </span>

              </div>



              {/* redes */}
              <div className="flex gap-4 pt-4">


                {/* tiktok */}
                <a
                  href="#"
                  className="
                    w-10
                    h-10
                    border
                    border-zinc-800
                    flex
                    items-center
                    justify-center
                    hover:bg-red-600
                    transition-colors
                  "
                >

                  <svg
                    viewBox="0 0 24 24"
                    className="w-5 h-5 fill-white"
                  >
                    <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-1.862V14.1a5.109 5.109 0 1 1-5.109-5.109c.178 0 .355.01.528.03v2.57a2.54 2.54 0 1 0 2.54 2.54V0h2.54a4.79 4.79 0 0 0 3.27 4.59v2.096z"/>
                  </svg>

                </a>



                {/* instagram */}
                <a
                  href="#"
                  className="
                    w-10
                    h-10
                    border
                    border-zinc-800
                    flex
                    items-center
                    justify-center
                    hover:bg-red-600
                    transition-colors
                  "
                >
                  <span className="material-symbols-outlined text-white">
                    photo_camera
                  </span>
                </a>



                {/* facebook */}
                <a
                  href="#"
                  className="
                    w-10
                    h-10
                    border
                    border-zinc-800
                    flex
                    items-center
                    justify-center
                    hover:bg-red-600
                    transition-colors
                  "
                >
                  <span className="material-symbols-outlined text-white">
                    thumb_up
                  </span>
                </a>



                {/* email */}
                <a
                  href="mailto:contacto@aldecoa.com"
                  className="
                    w-10
                    h-10
                    border
                    border-zinc-800
                    flex
                    items-center
                    justify-center
                    hover:bg-red-600
                    transition-colors
                  "
                >
                  <span className="material-symbols-outlined text-white">
                    mail
                  </span>
                </a>


              </div>


            </div>


          </div>



          {/* FORMULARIO */}
          <div className="bg-surface-container-high p-12">

            <form className="space-y-6">


              {/* fila */}
              <div className="grid md:grid-cols-2 gap-6">


                <div className="space-y-2">

                  <label
                    className="
                      text-[10px]
                      font-black
                      text-red-600
                      uppercase
                      tracking-widest
                    "
                  >
                    Nombre
                  </label>


                  <input
                    type="text"
                    className="
                      w-full
                      bg-surface-container-highest
                      border-b-2
                      border-outline-variant
                      focus:border-primary-container
                      focus:ring-0
                      transition-colors
                      text-white
                      py-3
                      px-4
                    "
                  />

                </div>



                <div className="space-y-2">

                  <label
                    className="
                      text-[10px]
                      font-black
                      text-red-600
                      uppercase
                      tracking-widest
                    "
                  >
                    Empresa
                  </label>


                  <input
                    type="text"
                    className="
                      w-full
                      bg-surface-container-highest
                      border-b-2
                      border-outline-variant
                      focus:border-primary-container
                      focus:ring-0
                      transition-colors
                      text-white
                      py-3
                      px-4
                    "
                  />

                </div>


              </div>



              {/* select */}
              <div className="space-y-2">

                <label
                  className="
                    text-[10px]
                    font-black
                    text-red-600
                    uppercase
                    tracking-widest
                  "
                >
                  Servicio de interés
                </label>


                <select
                  className="
                    w-full
                    bg-surface-container-highest
                    border-b-2
                    border-outline-variant
                    focus:border-primary-container
                    focus:ring-0
                    transition-colors
                    text-white
                    py-3
                    px-4
                  "
                >
                  <option>Eventos corporativos</option>
                  <option>Activaciones de marca</option>
                  <option>Producción audiovisual</option>
                  <option>Marketing BTL</option>
                </select>

              </div>



              {/* mensaje */}
              <div className="space-y-2">

                <label
                  className="
                    text-[10px]
                    font-black
                    text-red-600
                    uppercase
                    tracking-widest
                  "
                >
                  Mensaje
                </label>


                <textarea
                  rows="4"
                  className="
                    w-full
                    bg-surface-container-highest
                    border-b-2
                    border-outline-variant
                    focus:border-primary-container
                    focus:ring-0
                    transition-colors
                    text-white
                    py-3
                    px-4
                  "
                ></textarea>

              </div>



              {/* boton */}
              <button
                className="
                  w-full
                  bg-primary-container
                  text-white
                  py-6
                  font-black
                  uppercase
                  tracking-widest
                  hover:translate-x-1
                  hover:-translate-y-1
                  transition-all
                  shadow-[6px_6px_0px_0px_rgba(0,0,0,0.3)]
                "
              >
                Enviar mensaje
              </button>


            </form>


          </div>



        </div>

      </div>

    </section>

  );

}