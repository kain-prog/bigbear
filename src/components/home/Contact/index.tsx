import Link from "next/link";

export default function Contact() {

    return (

        <section className="px-4 lg:px-8 max-w-screen-2xl mx-auto py-16">
            <div className="max-w-screen-md m-auto">
                <h2 className="text-3xl font-bold mb-6 text-center">Pronto para tirar sua ideia do papel?</h2>

                <div className="flex justify-center gap-4 items-center">
                    <Link 
                        className="px-6 py-3 rounded-full text-white text-center bg-primary font-semibold hover:font-extrabold duration-150 transition-all shadow-[0_8px_24px_rgba(4,207,198,.28)]"
                        href={'https://wa.me/+5521997951349'}
                        target="_blank"
                    >
                        Chame no WhatsApp
                    </Link>

                    <Link 
                        className="px-6 py-3 rounded-full text-primary text-center bg-white border-2 border-primary font-semibold hover:font-extrabold duration-150 transition-all shadow-[0_8px_24px_rgba(4,207,198,.28)]"
                        href={'mailto:contato@bigbear.com.br'}
                        target="_blank"
                    >
                        contato@bigbear.com.br
                    </Link>
                </div>
            </div>
        
        </section>

    );

}