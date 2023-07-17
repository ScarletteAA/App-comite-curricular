import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const POST = async (req: NextRequest, res: NextResponse) => {
  const { name, carreraId } = await req.json();
  const asignatura = await prisma.asignatura.create({
    data: {
      name: name,
    },
  });
  return NextResponse.json(asignatura);
};

export const GET = async (req: NextRequest, res: NextResponse) => {
  const asignaturas = await prisma.asignatura.findMany({
    include: {
      carreras: {
        include: {
          carrera: true,
        },
      },
    },
  });
  return NextResponse.json(asignaturas);
};
