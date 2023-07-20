import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../prismaClient";

export const GET = async (
  req: NextRequest,
  { params: { id } }: { params: { id: string } }
) => {
  const carrera = await prisma.carrera.findUnique({
    where: {
      id: id,
    },
    include: {
      asesora: true,
      facultad: {
        include: {
          facultad: true,
        },
      },
      asignaturas_claves: {
        include: {
          asignatura: true,
        },
      },
      fases: {
        include: {
          seguimiento: true,
          evaluacion: true,
        },
      },
      bitacora_anual: {
        include: {
          bitacora_mensual: true,
          asignaturas_criticas: {
            include: {
              asignatura: true,
            },
          },
          carrera: true,
        },
      },
      historico: {
        include: {
          asesora: true,
          carrera: true,
        },
      },
    },
  });
  return NextResponse.json(carrera);
};
