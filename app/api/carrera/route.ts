import { NextResponse, NextRequest } from "next/server";
import { prisma } from "../prismaClient";

export const POST = async (req: NextRequest, res: NextResponse) => {
  const { name, asesoraId, fechaInicio, codigoCarrera } = await req.json();
  const carrera = await prisma.carrera.create({
    data: {
      name: name,
      asesora: {
        connect: {
          id: asesoraId,
        },
      },
      fechaInicio: fechaInicio,
      comite: false,
      codigo_carrera: codigoCarrera,
      historico: {
        create: {
          ultimo_rediseno: "",
          ultimo_ajuste_mayor: "",
          ultimo_ajuste_menor: "",
          fecha_resolucion_dgpre: "",
          administradora_dgpre: "",
          anos_ultimo_ajuste: 0,
          numero_redisenos: 0,
          asesora: {
            connect: {
              id: "2dd47a7e-6333-4928-82be-94bfe99aafc6",
            },
          },
          observaciones: "",
        },
      },
      fases: {
        create: {
          seguimiento: {
            connect: {
              id: "1bb702a6-1cae-4b01-aaf5-3e5fc78c0fde",
            },
          },
          evaluacion: {
            connect: {
              id: "d7a11a03-d5be-44e4-8892-3ef8ddb00678",
            },
          },
        },
      },
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
