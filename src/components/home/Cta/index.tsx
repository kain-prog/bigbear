import Image from "next/image";
import Link from "next/link";

export default function Cta() {
  return (
    <section className="px-4 lg:px-8 max-w-screen-2xl mx-auto py-16">
      <div className="px-4 py-6 lg:py-0 bg-gradient-to-r from-teal-600 via-teal-400 to-teal-600 rounded-lg flex flex-col lg:flex-row items-center gap-5">

        <div className="w-50 mt-8 hidden lg:block lg:mt-0">
            <Image 
                src={'/image-cta.png'} 
                width={230}
                height={360}
                alt="Projeto" 
                className="rounded-lg" 
            />
        </div>

        <div className="text-white text-center lg:text-left w-50 flex flex-col items-center justify-center ">
            <h2 className="text-4xl font-bold mb-0">Comece <br />seu  <br />projeto</h2>
        </div>

        <div className="text-white text-center lg:text-left w-70 flex flex-col ">
            <p className="text-xl mb-2 text-white">Diagnóstico grátis</p>
            <p className="text-xl mb-2 text-white">Pagamento 50/50</p>
            <p className="text-xl mb-4 text-white">Garantia de satisfação no prazo do escopo: ou ajuste sem custo</p>
        </div>

        <div className="flex-1 w-full flex items-center justify-center">
            <Link 
                href={'https://wa.me/+5521997951349'}
                target="_blank"
                className="inline-block px-6 py-3 text-lg bg-teal-800 rounded-full text-white font-semibold hover:bg-teal-700 hover:font-extrabold transition-all text-center"
                >
                    Quero meu diagnóstico
            </Link>
        </div>

      </div>
    </section>
  );
}
