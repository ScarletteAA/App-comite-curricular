import { PrismaClient } from "@prisma/client";
import { NextResponse, NextRequest } from "next/server";

const prisma = new PrismaClient();

export const POST = async (req: NextRequest, res: NextResponse) => {
  const { id_carrera, id_seguimiento, id_evaluacion } = await req.json();
  const fases_carrera = await prisma.fases_carrera.create({
    data: {
      carrera: {
        connect: {
          id: id_carrera,
        },
      },
      seguimiento: {
        connect: {
          id: id_seguimiento,
        },
      },
      evaluacion: {
        connect: {
          id: id_evaluacion,
        },
      },
    },
  });
  return NextResponse.json(fases_carrera);
};

//TODO: Hacer metodo update
