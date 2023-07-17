import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export const PATCH = async (req: NextRequest, res: NextResponse) => {
  const { id, n_sesiones_planificadas, n_sesiones_realizadas, comentarios } =
    await req.json();
  const bitacora_mensual = await prisma.bitacora_mensual.update({
    where: {
      id: id,
    },
    data: {
      n_sesiones_planificadas: n_sesiones_planificadas,
      n_sesiones_realizadas: n_sesiones_realizadas,
      comentarios: comentarios,
    },
  });

  return NextResponse.json(bitacora_mensual);
};
