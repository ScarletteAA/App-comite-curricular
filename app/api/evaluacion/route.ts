import { NextResponse, NextRequest } from "next/server";
import { prisma } from "../prismaClient";

export const POST = async (req: NextRequest, res: NextResponse) => {
  const { name } = await req.json();
  const evaluacion = await prisma.evaluacion.create({
    data: {
      nombre_fase: name,
    },
  });
  return NextResponse.json(evaluacion);
};

export const GET = async (req: NextRequest, res: NextResponse) => {
  const evaluaciones = await prisma.evaluacion.findMany();
  return NextResponse.json(evaluaciones);
};
