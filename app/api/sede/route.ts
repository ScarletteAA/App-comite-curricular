import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const GET = async (req: NextRequest, res: NextResponse) => {

    const sedes = await prisma.sede.findMany({
        include: {
            facultades: true,
        }
    })
    return NextResponse.json(sedes)


}

export const POST = async (req: NextRequest, res: NextResponse) => {
    const { name } = await req.json()
    const sede = await prisma.sede.create({
        data: {
            name
        }
    })
    return NextResponse.json(sede)
}


