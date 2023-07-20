import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../prismaClient";

export const GET = async (
  req: NextRequest,
  { params: { id } }: { params: { id: string } }
) => {
  const sede = await prisma.facultad.findUnique({
    where: {
      id: id,
    },
    include: {
      carreras: {
        include: {
          carrera: true,
        },
      },
    },
  });
  return NextResponse.json(sede);
};
