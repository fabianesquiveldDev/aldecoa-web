import Link from "next/link";

export default function NotFound() {

  return (

    <main className="min-h-screen bg-[#0E0E0E] text-white flex flex-col items-center justify-center px-8 text-center">

      <h1 className="text-7xl font-black font-headline mb-6 text-primary-container">
        404
      </h1>


      <h2 className="text-3xl font-black mb-6">
        Página no encontrada
      </h2>


      <p className="text-white/70 mb-10 max-w-xl">
        La página que buscas no existe o fue movida.
      </p>


      <Link
        href="/"
        className="
          bg-primary-container
          text-white
          px-8
          py-4
          font-black
          uppercase
          tracking-widest
          hover:translate-x-1
          hover:-translate-y-1
          transition-all
        "
      >
        Volver al inicio
      </Link>

    </main>

  );

}