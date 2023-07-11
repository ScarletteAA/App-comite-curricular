/*
  Warnings:

  - Added the required column `fechaInicio` to the `carrera` table without a default value. This is not possible if the table is not empty.
  - Added the required column `is_Carrera_Espejo` to the `carrera` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "carrera" ADD COLUMN     "fechaInicio" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "is_Carrera_Espejo" BOOLEAN NOT NULL;

-- CreateTable
CREATE TABLE "seguimiento" (
    "id" TEXT NOT NULL,
    "nombre_fase" TEXT NOT NULL,

    CONSTRAINT "seguimiento_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "evaluacion" (
    "id" TEXT NOT NULL,
    "nombre_fase" TEXT NOT NULL,

    CONSTRAINT "evaluacion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "fases_carrera" (
    "id" TEXT NOT NULL,
    "id_carrera" TEXT NOT NULL,
    "id_seguimiento" TEXT NOT NULL,
    "id_evaluacion" TEXT NOT NULL,

    CONSTRAINT "fases_carrera_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "fases_carrera" ADD CONSTRAINT "fases_carrera_id_carrera_fkey" FOREIGN KEY ("id_carrera") REFERENCES "carrera"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "fases_carrera" ADD CONSTRAINT "fases_carrera_id_seguimiento_fkey" FOREIGN KEY ("id_seguimiento") REFERENCES "seguimiento"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "fases_carrera" ADD CONSTRAINT "fases_carrera_id_evaluacion_fkey" FOREIGN KEY ("id_evaluacion") REFERENCES "evaluacion"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
