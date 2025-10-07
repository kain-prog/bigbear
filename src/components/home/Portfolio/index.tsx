"use server";

import type Portfolio from "@/app/types/Portfolio";
import Link from "next/link";

export default async function Portfolio(){

    let portfolios: Portfolio[] = []; 

    try {
        const apiUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/api/portfolios?_end=8&_order=ASC&_sort=id&_start=0`;
        const response = await fetch(apiUrl, { next: { revalidate: 3600 } });

        if (!response.ok) {
            throw new Error(`Falha ao buscar dados: ${response.status} ${response.statusText}`);
        }
        
        portfolios = await response.json();

        if (!Array.isArray(portfolios)) {
            console.error("Dados recebidos não são um array:", portfolios);
            portfolios = [];
        }

    } catch (error) {
        console.error("Erro no fetch de Portfolios:", error);
    }

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
                {portfolios.map((portfolio: Portfolio, i: number) => (
                <div key={portfolio.id} className="aspect-[4/3] rounded-xl overflow-hidden border border-[#17313314] bg-white hover:shadow-md transition-all duration-150 shadow-primary/30">
                    <a href={`${portfolio.url}`} target="_blank" className="w-full p-5 h-full flex items-center justify-center text-sm text-[#2a5457] bg-gradient-to-br from-white to-[#eef7f6]">
                        {
                            portfolio.image ? <img src={portfolio.image} alt={portfolio.title} className="h-full w-auto object-cover hover:transform hover:scale-105 transition-transform duration-200" /> 
                            : 
                            portfolio.title
                        }
                    </a>
                </div>
                ))}
            </div>
        </section>
    );
}
