export default function Services(){
    return(
        <section id="servicos" className="px-4 lg:px-8 max-w-screen-2xl mx-auto grid md:grid-cols-3 gap-4 py-8">
            {[{
            t:'Entrega ágil', d:'Fluxo otimizado e checkpoints claros para você acompanhar.'
            },{
            t:'Design que converte', d:'Layout orientado a metas (CTA, hierarquia, contraste e prova social).'
            },{
            t:'Sem dor de cabeça', d:'Atendimento direto no WhatsApp até a aprovação final.'
            }].map((b,i)=> (
            <article key={i} className="p-5 rounded-2xl bg-white shadow-md shadow-primary/60 border border-primary/20">
                <h3 className="font-semibold text-lg text-slate-900">{b.t}</h3>
                <p className="text-slate-900 mt-1">{b.d}</p>
            </article>
            ))}
        </section>
    )
}