// src/components/globals/Header.tsx

'use client';
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const NAV_LINKS = [
    { href: "#portfolio", label: "Portfolio" },
    { href: "#servicos", label: "Serviços" },
    { href: "#depoimentos", label: "Depoimentos" },
    { href: "#faq", label: "FAQ" },
];

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleLinkClick = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className="py-2 md:py-8 sticky top-0 z-[999999999] backdrop-blur bg-slate-50/85 border-b border-[#17313314]">
            <div className="px-4 lg:px-8 max-w-screen-2xl mx-auto flex items-center justify-between relative">

                <Link
                    href="/"
                    className="flex max-w-[80px] md:max-w-[135px] items-center absolute top-[10px] md:top-[-20px] border-transparent rounded-full"
                >
                    <Image
                        className="border-transparent rounded-full"
                        src="/bigbear.webp"
                        alt="Logo"
                        width={135}
                        height={135}
                    />
                </Link>

                <button
                    className="md:hidden z-50 p-2 ml-auto"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle Menu"
                >
                    {isMenuOpen ? (
                        <div className="text-2xl">×</div> 
                    ) : (
                        <div className="text-2xl">☰</div>
                    )}
                </button>

                <nav className="hidden md:flex justify-end w-full">
                    <ul className="flex space-x-4">
                        {NAV_LINKS.map(link => (
                            <li key={link.href}>
                                <Link href={link.href} className="text-slate-700 hover:font-semibold transition-all duration-300">
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                        <li>
                            <Link 
                                className="text-slate-50 bg-primary px-4 py-2 border rounded-full hover:font-semibold transition-all duration-300"
                                href={'https://wa.me/+5521997951349'} 
                                target="_blank"
                            >
                                Orçar agora
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>

            <div
                className={`
                    fixed top-0 left-0 h-screen w-80 bg-slate-50 shadow-2xl z-40
                    transform transition-transform duration-300 ease-in-out
                    md:hidden
                    ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}
                `}
            >

                <div className="flex justify-center w-full mt-12">
                    <Link
                        href="/"
                        className="flex max-w-[80px] md:max-w-[135px] items-center border-transparent rounded-full"
                    >
                        <Image
                            className="border-transparent rounded-full"
                            src="/bigbear.webp"
                            alt="Logo"
                            width={135}
                            height={135}
                        />
                    </Link>
                </div>

                <nav className="mt-20 p-4">
                    <ul className="flex flex-col space-y-4">
                        {NAV_LINKS.map(link => (
                            <li key={link.href}>
                                <Link 
                                    href={link.href} 
                                    className="text-slate-700 hover:font-semibold transition-all duration-300 text-lg block py-2"
                                    onClick={handleLinkClick}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}

                        <li className="pt-4">
                            <Link 
                                className="text-slate-50 bg-primary px-4 py-2 border rounded-full hover:font-semibold transition-all duration-300 block text-center"
                                href={'https://wa.me/+5521997951349'} 
                                target="_blank"
                                onClick={handleLinkClick}
                            >
                                Orçar agora
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
            
            {isMenuOpen && (
                <div 
                    className="fixed inset-0 bg-black/50 z-30 md:hidden h-screen" 
                    onClick={() => setIsMenuOpen(false)} 
                />
            )}
        </header>
    );
}