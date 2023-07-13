import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export const GET = async (
  req: NextRequest,
  { params: { id } }: { params: { id: string } }
) => {
  const carrera = await prisma.carrera.findUnique({
    where: {
      id: id,
    },
    include: {
      asignaturas_claves: {
        include: {
          asignatura: true,
        },
      },
    },
  });
  return NextResponse.json(carrera);
};
