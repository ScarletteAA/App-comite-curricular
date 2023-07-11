import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export const GET = async (req: NextRequest, { params: { id } }: { params: { id: string } }) => {
    const sede = await prisma.facultad.findUnique({
        where: {
            id: id
        },
        include: {
            carreras: true,

        }
    })
    return NextResponse.json(sede)
}