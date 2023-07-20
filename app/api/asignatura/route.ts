import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../prismaClient";

export const POST = async (req: NextRequest, res: NextResponse) => {
  const { name, carreraId } = await req.json();
  const asignatura = await prisma.asignatura.create({
    data: {
      name: name,
    },
  });
  return NextResponse.json(asignatura);
};

export const GET = async (req: NextRequest, res: NextResponse) => {
  const asignaturas = await prisma.asignatura.findMany();
  return NextResponse.json(asignaturas);
};
