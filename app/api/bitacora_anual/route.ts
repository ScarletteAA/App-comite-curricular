import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../prismaClient";

export const POST = async (req: NextRequest) => {
  const { id_carrera, year } = await req.json();
  const bitacora_anual = await prisma.bitacora_anual.create({
    data: {
      year: year,
      carrera: {
        connect: {
          id: id_carrera,
        },
      },
      bitacora_mensual: {
        create: [
          {
            mes: "Marzo",
            n_sesiones_planificadas: 0,
            n_sesiones_realizadas: 0,
            comentarios: "",
          },
          {
            mes: "Abril",
            n_sesiones_planificadas: 0,
            n_sesiones_realizadas: 0,
            comentarios: "",
          },
          {
            mes: "Mayo",
            n_sesiones_planificadas: 0,
            n_sesiones_realizadas: 0,
            comentarios: "",
          },
          {
            mes: "Junio",
            n_sesiones_planificadas: 0,
            n_sesiones_realizadas: 0,
            comentarios: "",
          },
          {
            mes: "Julio",
            n_sesiones_planificadas: 0,
            n_sesiones_realizadas: 0,
            comentarios: "",
          },
          {
            mes: "Agosto",
            n_sesiones_planificadas: 0,
            n_sesiones_realizadas: 0,
            comentarios: "",
          },
          {
            mes: "Septiembre",
            n_sesiones_planificadas: 0,
            n_sesiones_realizadas: 0,
            comentarios: "",
          },
          {
            mes: "Octubre",
            n_sesiones_planificadas: 0,
            n_sesiones_realizadas: 0,
            comentarios: "",
          },
          {
            mes: "Noviembre",
            n_sesiones_planificadas: 0,
            n_sesiones_realizadas: 0,
            comentarios: "",
          },
          {
            mes: "Diciembre",
            n_sesiones_planificadas: 0,
            n_sesiones_realizadas: 0,
            comentarios: "",
          },
        ],
      },
    },
  });
  return NextResponse.json(bitacora_anual);
};
