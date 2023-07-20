import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../prismaClient";

export const POST = async (req: NextRequest) => {
  const { id_asignatura, id_carrera } = await req.json();

  const asignaturas_clave = await prisma.asignatura_carrera.create({
    data: {
      asignatura: {
        connect: {
          id: id_asignatura,
        },
      },
      carrera: {
        connect: {
          id: id_carrera,
        },
      },
    },
  });

  return NextResponse.json(asignaturas_clave);
};
