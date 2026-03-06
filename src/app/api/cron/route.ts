import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const client = new PrismaClient();

export async function GET() {
    try {
        await client.project.findFirst({
            select: { id: true }
        });

        return NextResponse.json({ message: 'Ping no banco realizado com sucesso!' }, { status: 200 });
    } catch (error) {
        console.error("Erro no cronjob:", error);
        return NextResponse.json({ error: 'Falha ao conectar no banco.' }, { status: 500 });
    }
}