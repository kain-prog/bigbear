import { NextResponse } from 'next/server';

const PORTFOLIOS_DUMMY = [
  { id: 1, title: 'Projeto Alpha', date: new Date().toISOString().split('T')[0] },
  { id: 2, title: 'Projeto Beta', date: new Date().toISOString().split('T')[0] },
];

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);

    // --- Lógica de Paginação e Filtros (Obrigatório para React Admin) ---
    // O React Admin envia filtros via query params como: 
    // _start=0&_end=9&_sort=id&_order=DESC

    // Simplificando por enquanto, mas aqui entraria a query do Prisma:
    // const skip = parseInt(searchParams.get('_start') || '0');
    // const take = parseInt(searchParams.get('_end') || '10') - skip;
    // const sortField = searchParams.get('_sort');
    // const sortOrder = searchParams.get('_order') === 'DESC' ? 'desc' : 'asc';

    // const portfolios = await prisma.portfolio.findMany({
    //   skip: skip,
    //   take: take,
    //   orderBy: { [sortField]: sortOrder },
    // });
    
    // const total = await prisma.portfolio.count(); // Total de registros

    // Usando dados mock para prosseguir rapidamente:
    const portfolios = PORTFOLIOS_DUMMY;
    const total = PORTFOLIOS_DUMMY.length;

    return NextResponse.json(portfolios, {
        status: 200,
        headers: {
            // CRÍTICO: Informa ao React Admin quantos registros existem no total.
            'X-Total-Count': total.toString(), 
            'Access-Control-Expose-Headers': 'X-Total-Count',
            'Content-Range': `portfolios 0-${total - 1}/${total}` // Recomendado
        }
    });
}

// TODO: Você precisará implementar as rotas POST, PUT, DELETE aqui também.