import { NextResponse, NextRequest } from "next/server";
import { prisma } from "../prismaClient";

export const POST = async (req: NextRequest, res: NextResponse) => {
  const { name } = await req.json();
  const seguimiento = await prisma.seguimiento.create({
    data: {
      nombre_fase: name,
    },
  });
  return NextResponse.json(seguimiento);
};

export const GET = async (req: NextRequest, res: NextResponse) => {
  const seguimientos = await prisma.seguimiento.findMany();
  return NextResponse.json(seguimientos);
};
