import Header from '@/components/globals/Header'; // Seu Header
import Strip from '@/components/globals/Strip'; // Sua barra superior

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header /> 
      <Strip />

      <main>
        {children}
      </main>
      
    </>
  );
}