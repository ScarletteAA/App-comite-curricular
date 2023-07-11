import { PrismaClient } from "@prisma/client";
import { NextResponse, NextRequest } from "next/server";

const prisma = new PrismaClient();

interface BodyInput {
    name: string;
    sedeId: string;
}

export const POST = async (req: NextRequest, res: NextResponse) => {
    const { name, sedeId }: BodyInput = await req.json();

    const facultad = await prisma.facultad.create({
        data: {
            name: name,
            sede: {
                connect: {
                    id: sedeId,
                },
            },
        }
    });
    return NextResponse.json(facultad);
}

