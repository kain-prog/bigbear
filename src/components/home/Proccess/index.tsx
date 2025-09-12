export default function Proccess(){
    return(
        <section className="px-4 lg:px-8 max-w-screen-2xl mx-auto py-8">
            <h2 className="text-2xl font-bold mb-8">Como funciona</h2>
            <ol className="grid md:grid-cols-4 gap-4 list-none p-0">
                {["Briefing rápido - envio pelo WhatsApp.","Proposta com prazo e valor.","Criação + 2 rodadas de ajustes inclusos.","Entrega nos formatos ideais para impressão e digital."].map((s,i)=> (
                    <li key={i} className="bg-white border-1 border-primary/30 hover:shadow-md hover:shadow-primary/30 border-primary/40 rounded-2xl p-4 relative transition-all duration-150">
                        <b className="block mb-1">Passo {i+1}</b>
                        <span className="text-[#2a5457]">{s}</span>
                        <div className={`bg-primary border border-transparent z-[10] rounded-full grid place-items-center w-fit absolute -right-6 hidden lg:block ${i === 3 ? "hidden lg:hidden" : ""} top-1/2 transform -translate-y-1/2`}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" className="text-white lucide lucide-arrow-right-icon lucide-arrow-right">
                                <path d="M5 12h14"/>
                                <path d="m12 5 7 7-7 7"/>
                            </svg>
                        </div>
                    </li>
                ))}
            </ol>
        </section>
    );
}