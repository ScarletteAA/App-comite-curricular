import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const POST = async (req: NextRequest, res: NextResponse) => {
  const { name, carreraId } = await req.json();
  const asignatura = await prisma.asignatura.create({
    data: {
      name: name,
      carreras: {
        create: [
          {
            carrera: {
              connect: {
                id: carreraId,
              },
            },
          },
        ],
      },
    },
  });
  return NextResponse.json(asignatura);
};
