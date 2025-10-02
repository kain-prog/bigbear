import Link from "next/link";

export default function Portfolio(){
    return(
        <section id="portfolio" className="px-4 lg:px-8 max-w-screen-2xl mx-auto py-16">
            <div className="flex items-end justify-between mb-8">
                <h2 className="text-2xl font-bold">Trabalhos recentes</h2>
                <Link 
                    className="text-sm hover:text-primary transition-all duration-300"
                    href={'https://www.instagram.com/bigbear.dg/'} 
                    target="_blank"
                >
                    Ver mais no Instagram →
                </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {Array.from({length:8}).map((_,i)=> (
                <div key={i} className="aspect-[4/3] rounded-xl overflow-hidden border border-[#17313314] bg-white hover:shadow-md transition-all duration-150 shadow-primary/30">
                    <a href={`#${i+1}`} className="w-full h-full grid place-items-center text-sm text-[#2a5457] bg-gradient-to-br from-white to-[#eef7f6]">
                        Projeto {i+1}
                    </a>
                </div>
                ))}
            </div>
        </section>
    );
}