import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../prismaClient";

export const POST = async (req: NextRequest) => {
  const {
    ultimo_rediseno,
    ultimo_ajuste_mayor,
    ultimo_ajuste_menor,
    fecha_resolucion_dgpre,
    admin_dgpre,
    anos_ultimo_ajuste,
    n_redisenos,
    id_carrera,
    id_asesora,
    observaciones,
  } = await req.json();

  const historico = await prisma.historico.create({
    data: {
      ultimo_rediseno: ultimo_rediseno,
      ultimo_ajuste_mayor: ultimo_ajuste_mayor,
      ultimo_ajuste_menor: ultimo_ajuste_menor,
      fecha_resolucion_dgpre: fecha_resolucion_dgpre,
      administradora_dgpre: admin_dgpre,
      anos_ultimo_ajuste: anos_ultimo_ajuste,
      numero_redisenos: n_redisenos,
      carrera: {
        connect: {
          id: id_carrera,
        },
      },
      asesora: {
        connect: {
          id: id_asesora,
        },
      },
      observaciones: observaciones,
    },
  });
  return NextResponse.json(historico);
};

export const PATCH = async (req: NextRequest) => {
  const {
    id,
    ultimo_rediseno,
    ultimo_ajuste_mayor,
    ultimo_ajuste_menor,
    fecha_resolucion_dgpre,
    admin_dgpre,
    anos_ultimo_ajuste,
    n_redisenos,
    id_asesora,
    observaciones,
  } = await req.json();

  const historico = await prisma.historico.update({
    where: {
      id: id,
    },
    data: {
      ultimo_rediseno: ultimo_rediseno,
      ultimo_ajuste_mayor: ultimo_ajuste_mayor,
      ultimo_ajuste_menor: ultimo_ajuste_menor,
      fecha_resolucion_dgpre: fecha_resolucion_dgpre,
      administradora_dgpre: admin_dgpre,
      anos_ultimo_ajuste: anos_ultimo_ajuste,
      numero_redisenos: n_redisenos,
      asesora: {
        connect: {
          id: id_asesora,
        },
      },
      observaciones: observaciones,
    },
  });
  return NextResponse.json(historico);
};
