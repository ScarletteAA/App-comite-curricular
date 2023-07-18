/*
  Warnings:

  - You are about to drop the column `facultadId` on the `carrera` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "carrera" DROP CONSTRAINT "carrera_facultadId_fkey";

-- AlterTable
ALTER TABLE "carrera" DROP COLUMN "facultadId";

-- CreateTable
CREATE TABLE "carreras_facultad" (
    "id" TEXT NOT NULL,
    "facultadId" TEXT NOT NULL,
    "carreraId" TEXT NOT NULL,

    CONSTRAINT "carreras_facultad_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "carreras_facultad" ADD CONSTRAINT "carreras_facultad_facultadId_fkey" FOREIGN KEY ("facultadId") REFERENCES "facultad"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "carreras_facultad" ADD CONSTRAINT "carreras_facultad_carreraId_fkey" FOREIGN KEY ("carreraId") REFERENCES "carrera"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
