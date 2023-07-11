import { PrismaClient } from "@prisma/client";
import { NextResponse, NextRequest } from "next/server";

const prisma = new PrismaClient();

export const POST = async (req: NextRequest, res: NextResponse) => {
    const { name, facultadId, asesoraId } = await req.json();
    const carrera = await prisma.carrera.create({
        data: {
            name: name,
            facultad: {
                connect: {
                    id: facultadId,
                },
            },
            asesora: {
                connect: {
                    id: asesoraId,
                },
            }
        },
    });
    return NextResponse.json(carrera);
}
