import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
// import { client } from '@/app/lib/prisma/prisma';
import { put } from '@vercel/blob';
import * as crypto from 'crypto';
import Payload from '@/app/types/Payload';

const client = new PrismaClient();

// const PORTFOLIOS_DUMMY = [
//   { id: 1, title: 'Projeto Alpha', date: new Date().toISOString().split('T')[0] },
//   { id: 2, title: 'Projeto Beta', date: new Date().toISOString().split('T')[0] },
// ];

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);

    const res = NextResponse.next();
    res.headers.set('Access-Control-Allow-Origin', '*'); 
    res.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    const skip = parseInt(searchParams.get('_start') || '0');
    const take = parseInt(searchParams.get('_end') || '10') - skip;
    const sortField = searchParams.get('_sort');
    const sortOrder = searchParams.get('_order') === 'DESC' ? 'desc' : 'asc';   

    try{
        const [projects, total] = await Promise.all([
            client.project.findMany({
                skip: skip,
                take: take,
                orderBy: { [(sortField as string)]: sortOrder },
            }),
            client.project.count(), 
        ]);
        
        // MOCKS:
        // const portfolios = PORTFOLIOS_DUMMY;
        // const total = PORTFOLIOS_DUMMY.length;

        return NextResponse.json(projects, {
            status: 200,
            headers: {
                'X-Total-Count': total.toString(), 
                'Access-Control-Expose-Headers': 'X-Total-Count',
                'Content-Range': `portfolios 0-${total - 1}/${total}`
            }
        });

    }catch (error) {
        return NextResponse.json(
            { error: 'Erro interno ao buscar projetos.' },
            { status: 500 }
        );
    }
}


export async function POST(request: Request) {
    const data = await request.json();

    const title = data.title as string;
    const base64Image = data.image as string; 

    if (!base64Image || !title) {
        return NextResponse.json(
            { error: 'Título e imagem são obrigatórios.' }, 
            { status: 400 }
        );
    }

    try {

        const parts = base64Image.split(';base64,');
        if (parts.length !== 2) {
             return NextResponse.json(
                 { error: 'Formato da imagem Base64 inválido.' }, 
                 { status: 400 }
             );
        }

        const mimeType = parts[0].replace('data:', '');
        const base64Data = parts[1]; 

        const imageBuffer = Buffer.from(base64Data, 'base64'); 

        const fileExtension = mimeType.split('/')[1] || 'jpg';
        const uniqueHash = crypto.randomBytes(16).toString('hex');
        const filename = `${uniqueHash}.${fileExtension}`;

        const blob = await put(filename, imageBuffer, {
            contentType: mimeType,
            access: 'public', 
        });

        const blobUrl = blob.url;

        const newProject = await client.project.create({
            data: {
                title: title,
                image: blobUrl,
                url: data.url,
                createdAt: new Date() as Date
            }
        });

        return NextResponse.json(newProject, { status: 201 });

    } catch (error) {
        
        return NextResponse.json({ 
            error: 'Erro interno ao processar e salvar o projeto.',
            details: (error as Error).message
        }, { status: 500 });
    }
}
