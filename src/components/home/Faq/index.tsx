import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Image from "next/image";


export default function Faq(){
    return(
        <section id="faq" className="px-4 lg:px-8 max-w-screen-2xl mx-auto py-16 flex justify-between gap-8 items-center">
            <div className="w-full">
                <h2 className="text-2xl font-bold mb-8">Perguntas frequentes</h2>

                <Accordion type="single" collapsible className="border border-primary/15 shadow-md shadow-primary/15 rounded-md px-4 mb-4">
                    <AccordionItem value="item-1">
                        <AccordionTrigger className="cursor-pointer hover:no-underline hover:text-primary">Quais formatos de entrega?</AccordionTrigger>
                        <AccordionContent>
                            PDF/X para gráfica, PNG/JPG para digital e arquivos editáveis sob demanda.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>

                <Accordion type="single" collapsible className="border border-primary/15 shadow-md shadow-primary/15 rounded-md px-4 mb-4">
                    <AccordionItem value="item-2">
                        <AccordionTrigger className="cursor-pointer hover:no-underline hover:text-primary">Prazo médio?</AccordionTrigger>
                        <AccordionContent>
                            Peças simples em 48–72h; projetos maiores conforme escopo.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>

                <Accordion type="single" collapsible className="border border-primary/15 shadow-md shadow-primary/15 rounded-md px-4 mb-4">
                    <AccordionItem value="item-3">
                        <AccordionTrigger className="cursor-pointer hover:no-underline hover:text-primary">Como pago?</AccordionTrigger>
                        <AccordionContent>
                            Pix, cartão (link) ou boleto. 50% para iniciar, 50% na aprovação.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>

            <div className="w-2xl  hidden md:flex justify-center">
                <Image
                    className="border-transparent rounded-full"
                    src="/image-faq.png"
                    alt="Logo"
                    width={210}
                    height={340}
                />
            </div>

        </section>
    );
}