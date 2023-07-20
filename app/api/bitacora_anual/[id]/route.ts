import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../prismaClient";

export const GET = async (
  req: NextRequest,
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
      carrera: true,
    },
  });
  return NextResponse.json(bitacora_anual);
};
