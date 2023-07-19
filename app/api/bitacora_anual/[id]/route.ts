import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();
export const GET = async (req: NextRequest,
    { params: { id } }: { params: { id: string } }
) => {
    const bitacora_anual = await prisma.bitacora_anual.findUnique({
        where: {
            id: id,
        },
        include: {
            bitacora_mensual: true,
            asignaturas_criticas: {
                include: {
                    asignatura: true,
                },
            },
        },
    });
    return NextResponse.json(bitacora_anual);

}
