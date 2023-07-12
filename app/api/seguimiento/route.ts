import { PrismaClient } from "@prisma/client";
import { NextResponse, NextRequest } from "next/server";

const prisma = new PrismaClient();

export const POST = async (req: NextRequest, res: NextResponse) => {
    const { name } = await req.json();
    const seguimiento = await prisma.seguimiento.create({
        data: {
            nombre_fase: name,
        },
    });
    return NextResponse.json(seguimiento);
}