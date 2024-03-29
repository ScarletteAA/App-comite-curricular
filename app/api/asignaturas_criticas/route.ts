import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../prismaClient";

export const POST = async (req: NextRequest) => {
  const { id_asignatura, id_bitacora_anual } = await req.json();

  const asignaturas_critica = await prisma.asignaturas_criticas.create({
    data: {
      asignatura: {
        connect: {
          id: id_asignatura,
        },
      },
      bitacora_anual: {
        connect: {
          id: id_bitacora_anual,
        },
      },
    },
  });

  return NextResponse.json(asignaturas_critica);
};
