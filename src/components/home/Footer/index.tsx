import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-primary">
            <div className="max-w-screen-2xl mx-auto px-4 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center md:text-left">

                    <div>
                        <h3 className="text-white font-bold text-lg mb-4">Links</h3>
                        <ul className="text-white">
                            <li><a className="hover:font-bold transition-all duration-300" href="#home">Home</a></li>
                            <li><a className="hover:font-bold transition-all duration-300" href="#services">Serviços</a></li>
                            <li><a className="hover:font-bold transition-all duration-300" href="#portfolio">Portfólio</a></li>
                            <li><a className="hover:font-bold transition-all duration-300" href="#testimonials">Depoimentos</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-white font-bold text-lg mb-4">Contato</h3>
                        <ul className="text-white">
                            <li>(21) 99795-1349</li>
                            <li><a className="hover:font-bold transition-all duration-300" href="mailto:contato@bigbear.com.br">contato@bigbear.com.br</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-white font-bold text-lg mb-4">Redes Sociais</h3>
                        <ul className="text-white">
                            <li><a className="hover:font-bold transition-all duration-300" href="https://www.instagram.com/bigbear.dg/" target="_blank">Instagram</a></li>
                            <li><a className="hover:font-bold transition-all duration-300" href="https://www.facebook.com/share/1DX62HyfJL/" target="_blank">Facebook</a></li>
                            <li><a className="hover:font-bold transition-all duration-300" href="https://www.behance.net/mellorad2f3" target="_blank">Behance</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-white font-bold text-lg mb-4">Sobre</h3>
                        <p className="text-white">Transforme sua ideia em peças profissionais com design estratégico e marcas memoráveis.</p>
                    </div>
                </div>
            </div>
            <div className="bg-primary">
                <div className="max-w-screen-2xl mx-auto px-4 lg:px-8 py-4">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-white">© {new Date().getFullYear()} Big Bear. Todos os direitos reservados.</p>
                        <p className="text-white">Desenvolvido por <Link href="https://kaindev.com.br" target="_blank" className="font-bold transition-all duration-300">Kaindev</Link>.</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}