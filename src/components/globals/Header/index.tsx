import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="py-8 sticky top-0 z-[999999999] backdrop-blur bg-slate-50/85 border-b border-[#17313314]">
        <div className="px-4 lg:px-8 max-w-screen-2xl mx-auto flex items-center justify-between relative">
            <Link
                href="/"
                className="flex max-w-[80px] md:max-w-[135px] items-center absolute top-[-20px] border-transparent rounded-full"
            >
                <Image
                    className="border-transparent rounded-full"
                    src="/bigbear.webp"
                    alt="Logo"
                    width={135}
                    height={135}
                />
            </Link>


            <nav className="hidden md:flex justify-end w-full">
                <ul className="flex space-x-4">
                    <li>
                        <Link href="#" className="text-slate-700 hover:font-semibold transition-all duration-300">Portfolio</Link>
                    </li>

                    <li>
                        <Link href="#" className="text-slate-700 hover:font-semibold transition-all duration-300">Serviços</Link>
                    </li>

                    <li>
                        <Link href="#" className="text-slate-700 hover:font-semibold transition-all duration-300">Depoimentos</Link>
                    </li>

                    <li>
                        <Link href="#" className="text-slate-700 hover:font-semibold transition-all duration-300">FAQ</Link>
                    </li>

                    <li>
                        <Link href="#" className="text-slate-50 bg-primary px-4 py-2 border rounded-full hover:font-semibold transition-all duration-300">Orçar agora</Link>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
    
  );
}
