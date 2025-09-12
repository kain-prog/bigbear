"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';

export default function Testimonials(){
    return(
        <section className="px-4 lg:px-8 max-w-screen-2xl mx-auto py-16 relative">
            <h2 className="text-2xl font-bold mb-12">O que falam da Big bear?</h2>

            <button data-prev="swiper-nav" className="absolute top-36 left-0 transform z-[9999] cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-primary lucide lucide-chevrons-left-icon lucide-chevrons-left">
                    <path d="m11 17-5-5 5-5"/>
                    <path d="m18 17-5-5 5-5"/>
                </svg>
            </button>

            <button data-next="swiper-nav" className="absolute top-36 right-0 transform z-[9999] cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-primary lucide lucide-chevrons-right-icon lucide-chevrons-right">
                    <path d="m6 17 5-5-5-5"/>
                    <path d="m13 17 5-5-5-5"/>
                </svg>
            </button>

            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                modules={[Navigation]}
                navigation={{
                    prevEl: '[data-prev="swiper-nav"]',
                    nextEl: '[data-next="swiper-nav"]',
                }}
                loop
                className='m-auto w-full !px-[30px]'
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 3,
                    },
                }}
            >
                {[
                    {
                        author: "Cliente Satisfeito",
                        text: "A Big Bear foi fundamental para o sucesso do meu projeto!"
                    },
                    {
                        author: "Cliente Satisfeito",
                        text: "Atendimento excepcional e resultados incríveis.",
                    },
                    {
                        author: "Cliente Satisfeito",
                        text: "Recomendo a todos que buscam qualidade e agilidade.",
                    },
                    {
                        author: "Cliente Satisfeito",
                        text: "Recomendo a todos que buscam qualidade e agilidade.",
                    },
                ].map((testimonial, index) => (
                    <SwiperSlide key={index}>
                        <blockquote className="px-4 italic">
                            <cite className="text-center md:text-start block text-sm">- {testimonial.author}</cite>
                            <p className="text-center md:text-start mt-2">{testimonial.text}</p>
                        </blockquote>
                    </SwiperSlide>
                ))}

            </Swiper>
        </section>
    );
}