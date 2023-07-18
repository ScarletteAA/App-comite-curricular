import { PrismaClient } from "@prisma/client";
import { NextResponse, NextRequest } from "next/server";

const prisma = new PrismaClient();

export const POST = async (req: NextRequest, res: NextResponse) => {
  const { name, asesoraId, fechaInicio, comite_estado, codigoCarrera } =
    await req.json();
  const carrera = await prisma.carrera.create({
    data: {
      name: name,
      asesora: {
        connect: {
          id: asesoraId,
        },
      },
      fechaInicio: fechaInicio,
      comite: comite_estado,
      codigo_carrera: codigoCarrera,
    },
  });
  return NextResponse.json(carrera);
};

export const GET = async (req: NextRequest, res: NextResponse) => {
  const carreras = await prisma.carrera.findMany({
    include: {
      facultad: true,
      asesora: true,
    },
  });
  return NextResponse.json(carreras);
};

export const PATCH = async (req: NextRequest, res: NextResponse) => {
  const { id, comite_estado } = await req.json();
  const carrera = await prisma.carrera.update({
    where: {
      id: id,
    },
    data: {
      comite: comite_estado,
    },
  });
  return NextResponse.json(carrera);
};
