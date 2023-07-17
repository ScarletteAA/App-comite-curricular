import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export const POST = async (req: NextRequest) => {
  const { id_carrera } = await req.json();
  const bitacora_anual = await prisma.bitacora_anual.create({
    data: {
      carrera: {
        connect: {
          id: id_carrera,
        },
      },
      bitacora_mensual: {
        create: [
          { mes: "Marzo", n_sesiones: 0, comentarios: "" },
          { mes: "Abril", n_sesiones: 0, comentarios: "" },
          { mes: "Mayo", n_sesiones: 0, comentarios: "" },
          { mes: "Junio", n_sesiones: 0, comentarios: "" },
          { mes: "Julio", n_sesiones: 0, comentarios: "" },
          { mes: "Agosto", n_sesiones: 0, comentarios: "" },
          { mes: "Septiembre", n_sesiones: 0, comentarios: "" },
          { mes: "Octubre", n_sesiones: 0, comentarios: "" },
          { mes: "Noviembre", n_sesiones: 0, comentarios: "" },
          { mes: "Diciembre", n_sesiones: 0, comentarios: "" },
        ],
      },
    },
  });
  return NextResponse.json(bitacora_anual);
};
