/*
  Warnings:

  - Added the required column `comite` to the `carrera` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "asignatura" ADD COLUMN     "carreraId" TEXT;

-- AlterTable
ALTER TABLE "carrera" ADD COLUMN     "comite" BOOLEAN NOT NULL;

-- CreateTable
CREATE TABLE "bitacora_anual" (
    "id" TEXT NOT NULL,
    "id_carrera" TEXT NOT NULL,

    CONSTRAINT "bitacora_anual_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "bitacora_mensual" (
    "id" TEXT NOT NULL,
    "id_bitacora_anual" TEXT NOT NULL,
    "mes" TEXT NOT NULL,
    "n_sesiones" INTEGER NOT NULL,
    "comentarios" TEXT NOT NULL,

    CONSTRAINT "bitacora_mensual_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "asignaturas_criticas" (
    "id" TEXT NOT NULL,
    "id_asignatura" TEXT NOT NULL,
    "id_bitacora_anual" TEXT NOT NULL,

    CONSTRAINT "asignaturas_criticas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "historico" (
    "id" TEXT NOT NULL,
    "ultimo_rediseno" TEXT NOT NULL,
    "ultimo_ajuste_mayor" TEXT NOT NULL,
    "ultimo_ajuste_menor" TEXT NOT NULL,
    "fecha_resolucion_dgpre" TEXT NOT NULL,
    "administradora_dgpre" TEXT NOT NULL,
    "anos_ultimo_ajuste" INTEGER NOT NULL,
    "numero_redisenos" INTEGER NOT NULL,
    "id_carrera" TEXT NOT NULL,
    "id_asesora" TEXT NOT NULL,
    "observaciones" TEXT NOT NULL,

    CONSTRAINT "historico_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "asignatura" ADD CONSTRAINT "asignatura_carreraId_fkey" FOREIGN KEY ("carreraId") REFERENCES "carrera"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "bitacora_anual" ADD CONSTRAINT "bitacora_anual_id_carrera_fkey" FOREIGN KEY ("id_carrera") REFERENCES "carrera"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "bitacora_mensual" ADD CONSTRAINT "bitacora_mensual_id_bitacora_anual_fkey" FOREIGN KEY ("id_bitacora_anual") REFERENCES "bitacora_anual"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "asignaturas_criticas" ADD CONSTRAINT "asignaturas_criticas_id_asignatura_fkey" FOREIGN KEY ("id_asignatura") REFERENCES "asignatura"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "asignaturas_criticas" ADD CONSTRAINT "asignaturas_criticas_id_bitacora_anual_fkey" FOREIGN KEY ("id_bitacora_anual") REFERENCES "bitacora_anual"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "historico" ADD CONSTRAINT "historico_id_carrera_fkey" FOREIGN KEY ("id_carrera") REFERENCES "carrera"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "historico" ADD CONSTRAINT "historico_id_asesora_fkey" FOREIGN KEY ("id_asesora") REFERENCES "asesora"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
