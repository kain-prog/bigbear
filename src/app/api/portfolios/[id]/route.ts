import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { put } from '@vercel/blob';
import * as crypto from 'crypto';

const client = new PrismaClient();

export async function GET(request: Request, { params }: { params: Promise<{ id: string }> }) {

    const { id } = await params;

    if (!id) {
        return NextResponse.json({ error: 'ID do projeto é obrigatório.' }, { status: 400 });
    }

    try {
       
        const data = await client.project.findFirst({
            where: { id: id },
        });

        if (!data) {
            return NextResponse.json({ error: 'Projeto não encontrado.' }, { status: 404 });
        }

        return NextResponse.json(data, { status: 200 });

    } catch (error) {
        return NextResponse.json({ error: 'Erro ao atualizar projeto', details: (error as Error).message }, { status: 500 });
    }
}

export async function PUT(request: Request, { params }: { params: Promise<{ id: string }> }) {

    const { id } = await params;

    if (!id) {
        return NextResponse.json({ error: 'ID do projeto é obrigatório.' }, { status: 400 });
    }

    const data = await request.json();
    const title = data.title as string;
    const base64Image = data.image as string | undefined;
    const url = data.url as string | undefined;

    try {
        let blobUrl: string | undefined;

        if (base64Image) {
            const parts = base64Image.split(';base64,');
            if (parts.length !== 2) throw new Error('Formato da imagem Base64 inválido.');
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

            blobUrl = blob.url;
        }

        const updated = await client.project.update({
            where: { id: id },
            data: {
                title,
                url,
                ...(blobUrl ? { image: blobUrl } : {}),
            },
        });

        return NextResponse.json(updated, { status: 200 });

    } catch (error) {
        return NextResponse.json({ error: 'Erro ao atualizar projeto', details: (error as Error).message }, { status: 500 });
    }
}

export async function DELETE(request: Request) {
    const url = new URL(request.url);
    const id = url.pathname.split('/').pop();

    if (!id) {
        return NextResponse.json({ error: 'ID do projeto é obrigatório.' }, { status: 400 });
    }

    try {
        await client.project.delete({
            where: { id: id },
        });

        return NextResponse.json({ success: true }, { status: 200 });
    } catch (error) {
        console.error('Erro ao deletar projeto:', error);
        return NextResponse.json({ error: 'Erro ao deletar projeto', details: (error as Error).message }, { status: 500 });
    }
}