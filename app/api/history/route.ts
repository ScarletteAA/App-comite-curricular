import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../prismaClient";

export const POST = async (req: NextRequest) => {
  const { descripcion, id_carrera } = await req.json();
  const history = await prisma.history.create({
    data: {
      fecha: new Date().toLocaleString(),
      descripcion: descripcion,
      carrera: {
        connect: {
          id: id_carrera,
        },
      },
    },
  });
  return NextResponse.json(history);
};

export const GET = async (req: NextRequest) => {
  const history = await prisma.history.findMany({
    include: {
      carrera: true,
    },
  });
  return NextResponse.json(history);
};
