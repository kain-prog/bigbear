import Image from "next/image";

export default function Banner() {
  return (

      <>
        <section className="relative">
            <div className="absolute -top-40 left-1/2 right-1/2 -translate-x-1/2 w-full max-w-[1200px] h-[600px] rounded-full bg-[rgba(4,207,198,.18)] blur-3xl" />
            <div className="px-4 lg:px-8 max-w-screen-2xl mx-auto grid md:grid-cols-2 gap-10 py-16">
                <div className="flex flex-col gap-6 justify-center">
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                        Projetos gráficos e personalizados
                    </h1>
                    <p className="mt-3 text-[#2a5457]">
                        Olá, sou Raphael. Transformo a sua ideia em peças profissionais com prazos curtos, atendimento 1:1 e foco em conversão.
                    </p>
                    <div className="mt-5 flex flex-wrap items-center gap-3 z-[100]">
                        <a className="px-6 py-3 rounded-full text-white bg-primary font-extrabold shadow-[0_8px_24px_rgba(4,207,198,.28)]" href="#contato">Começar no WhatsApp</a>
                        <a className="px-2 py-2 rounded-full bg-gradient-to-r from-[#F58529] via-[#DD2A7B] to-[#8134AF] text-white font-semibold text-lg" href="#instagram">
                            <svg fill="#fff" width="20px" height="20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-name="Instagram">
                                <path d="M17.34,5.46h0a1.2,1.2,0,1,0,1.2,1.2A1.2,1.2,0,0,0,17.34,5.46Zm4.6,2.42a7.59,7.59,0,0,0-.46-2.43,4.94,4.94,0,0,0-1.16-1.77,4.7,4.7,0,0,0-1.77-1.15,7.3,7.3,0,0,0-2.43-.47C15.06,2,14.72,2,12,2s-3.06,0-4.12.06a7.3,7.3,0,0,0-2.43.47A4.78,4.78,0,0,0,3.68,3.68,4.7,4.7,0,0,0,2.53,5.45a7.3,7.3,0,0,0-.47,2.43C2,8.94,2,9.28,2,12s0,3.06.06,4.12a7.3,7.3,0,0,0,.47,2.43,4.7,4.7,0,0,0,1.15,1.77,4.78,4.78,0,0,0,1.77,1.15,7.3,7.3,0,0,0,2.43.47C8.94,22,9.28,22,12,22s3.06,0,4.12-.06a7.3,7.3,0,0,0,2.43-.47,4.7,4.7,0,0,0,1.77-1.15,4.85,4.85,0,0,0,1.16-1.77,7.59,7.59,0,0,0,.46-2.43c0-1.06.06-1.4.06-4.12S22,8.94,21.94,7.88ZM20.14,16a5.61,5.61,0,0,1-.34,1.86,3.06,3.06,0,0,1-.75,1.15,3.19,3.19,0,0,1-1.15.75,5.61,5.61,0,0,1-1.86.34c-1,.05-1.37.06-4,.06s-3,0-4-.06A5.73,5.73,0,0,1,6.1,19.8,3.27,3.27,0,0,1,5,19.05a3,3,0,0,1-.74-1.15A5.54,5.54,0,0,1,3.86,16c0-1-.06-1.37-.06-4s0-3,.06-4A5.54,5.54,0,0,1,4.21,6.1,3,3,0,0,1,5,5,3.14,3.14,0,0,1,6.1,4.2,5.73,5.73,0,0,1,8,3.86c1,0,1.37-.06,4-.06s3,0,4,.06a5.61,5.61,0,0,1,1.86.34A3.06,3.06,0,0,1,19.05,5,3.06,3.06,0,0,1,19.8,6.1,5.61,5.61,0,0,1,20.14,8c.05,1,.06,1.37.06,4S20.19,15,20.14,16ZM12,6.87A5.13,5.13,0,1,0,17.14,12,5.12,5.12,0,0,0,12,6.87Zm0,8.46A3.33,3.33,0,1,1,15.33,12,3.33,3.33,0,0,1,12,15.33Z"></path>
                            </svg>
                         </a>
                        <span className="px-3 py-1 rounded-full bg-[#e9fbfa] text-[#04524f] font-semibold text-sm">Em breve entraremos em contato</span>
                    </div>

                    {/* Social proof */}
                    <div className="mt-6 flex items-center gap-3 text-sm">
                        {[1,2,3].map(i=> (
                            <div key={i} className="size-8 rounded-full border-3 border-[#1731331a] border-primary bg-white" />
                        ))}
                        <span>+100 projetos entregues • 4,9★</span>
                    </div>
                </div>

                {/* Visual */}
                <div className="hidden md:block relative min-h-72">
                    <div className="absolute right-0 top-6 p-5 rounded-2xl border border-[#17313314] bg-white/70 backdrop-blur shadow-[0_18px_60px_rgba(8,36,39,.1)]">
                        <div className="w-72 h-44 rounded-xl bg-gradient-to-br from-white to-[#eef7f6] grid place-items-center text-sm text-[#2a5457]">
                            <Image
                                className="border-transparent rounded-full"
                                src="/mockup-tshirt.webp"
                                alt="Logo"
                                width={300}
                                height={300}
                            />
                        </div>
                    </div>
                    <div className="absolute -right-8 bottom-0 w-80 h-80 rounded-full blur-2xl" style={{background:"radial-gradient(circle at 30% 30%, rgba(4,207,198,.6), transparent 50%), radial-gradient(circle at 60% 50%, rgba(15,178,171,.5), transparent 50%)"}} />
                </div>
            </div>
        </section>
      </>
  );
}
