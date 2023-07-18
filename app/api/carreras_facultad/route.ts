import { PrismaClient } from "@prisma/client";
import { NextResponse, NextRequest } from "next/server";

const prisma = new PrismaClient();

export const POST = async (req: NextRequest, res: NextResponse) => {
  const { id_carrera, id_facultad } = await req.json();

  const carrera_facultad = await prisma.carreras_facultad.create({
    data: {
      carrera: {
        connect: {
          id: id_carrera,
        },
      },
      facultad: {
        connect: {
          id: id_facultad,
        },
      },
    },
  });

  return NextResponse.json(carrera_facultad);
};
