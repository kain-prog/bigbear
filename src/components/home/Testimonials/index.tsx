"use client";

import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';

export default function Testimonials() {
    const [depoimentos, setDepoimentos] = useState([]);
    const [carregando, setCarregando] = useState(true);

    useEffect(() => {
        async function carregarDepoimentos() {
            try {
                const response = await fetch('https://admin.bigbear.com.br/api/comments/');
                if (!response.ok) throw new Error('Falha ao carregar depoimentos');

                const json = await response.json();

                const avaliacoes = json.data || [];

                const depoimentosValidos = avaliacoes.filter(
                    (dep: any) => dep.active && dep.comment && dep.comment.trim() !== ""
                );

                setDepoimentos(depoimentosValidos);
            } catch (error) {
                console.error("Erro ao buscar avaliações da API:", error);
            } finally {
                setCarregando(false);
            }
        }

        carregarDepoimentos();
    }, []);

    if (!carregando && depoimentos.length === 0) {
        return null;
    }

    return (
        <section id="depoimentos" className="px-4 lg:px-8 max-w-screen-2xl mx-auto py-16 relative">
            <h2 className="text-2xl font-bold mb-12 text-center md:text-left">O que falam da Big bear?</h2>

            {!carregando && (
                <>
                    <button data-prev="swiper-nav" className="absolute top-36 left-0 transform z-[9999] cursor-pointer hidden md:block">
                        <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-primary lucide lucide-chevrons-left-icon lucide-chevrons-left">
                            <path d="m11 17-5-5 5-5" />
                            <path d="m18 17-5-5 5-5" />
                        </svg>
                    </button>

                    <button data-next="swiper-nav" className="absolute top-36 right-0 transform z-[9999] cursor-pointer hidden md:block">
                        <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-primary lucide lucide-chevrons-right-icon lucide-chevrons-right">
                            <path d="m6 17 5-5-5-5" />
                            <path d="m13 17 5-5-5-5" />
                        </svg>
                    </button>
                </>
            )}

            {carregando ? (
                <div className="flex justify-center items-center h-32">
                    <p className="text-gray-500 animate-pulse">Carregando avaliações...</p>
                </div>
            ) : (
                <Swiper
                    spaceBetween={30}
                    slidesPerView={1}
                    modules={[Navigation]}
                    navigation={{
                        prevEl: '[data-prev="swiper-nav"]',
                        nextEl: '[data-next="swiper-nav"]',
                    }}
                    loop={depoimentos.length > 3}
                    className='m-auto w-full md:!px-[60px]'
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                >
                    {depoimentos.map((testimonial: any) => (
                        <SwiperSlide key={testimonial.id}>
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 h-full flex flex-col">

                                <div className="flex items-center gap-4 mb-4">
                                    {testimonial.avatar ? (
                                        <img
                                            src={testimonial.avatar}
                                            alt={testimonial.name}
                                            referrerPolicy="no-referrer"
                                            className="w-12 h-12 rounded-full object-cover"
                                        />
                                    ) : (
                                        <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 font-bold">
                                            {testimonial.name.charAt(0)}
                                        </div>
                                    )}

                                    <div>
                                        <cite className="block text-sm font-bold not-italic text-gray-900">
                                            {testimonial.name}
                                        </cite>
                                        <div className="flex text-yellow-400 text-sm mt-1">
                                            {'★'.repeat(testimonial.rating)}{'☆'.repeat(5 - testimonial.rating)}
                                        </div>
                                    </div>
                                </div>
                                <blockquote className="flex-1">
                                    <p className="text-gray-600 line-clamp-4 text-sm leading-relaxed">
                                        "{testimonial.comment}"
                                    </p>
                                </blockquote>

                                {/* Data no rodapé do card */}
                                <div className="mt-4 text-xs text-gray-400 font-medium">
                                    {testimonial.date}
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            )}
        </section>
    );
}