import { PrismaClient } from "@prisma/client";
import { NextResponse, NextRequest } from "next/server";


const prisma = new PrismaClient();

export const POST = async (req: NextRequest, res: NextResponse) => {
    const { name, email, password } = await req.json();
    const user = await prisma.asesora.create({
        data: {
            name: name,
            email: email,
            password: password,
        },
    });
    return NextResponse.json(user);

}

