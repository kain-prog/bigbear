import Banner from "@/components/home/Banner";
import Contact from "@/components/home/Contact";
import Cta from "@/components/home/Cta";
import Faq from "@/components/home/Faq";
import Portfolio from "@/components/home/Portfolio";
import Proccess from "@/components/home/Proccess";
import Services from "@/components/home/Services";
import Testimonials from "@/components/home/Testimonials";

export default function Home() {
  return (
    <>
      <Banner />
      <Services />
      <Portfolio />
      <Proccess />
      <Cta />
      <Testimonials />
      <Faq />
      <Contact />
    </>
  );
}
