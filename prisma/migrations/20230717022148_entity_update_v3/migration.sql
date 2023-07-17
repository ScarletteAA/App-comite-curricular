/*
  Warnings:

  - You are about to drop the column `n_sesiones` on the `bitacora_mensual` table. All the data in the column will be lost.
  - Added the required column `year` to the `bitacora_anual` table without a default value. This is not possible if the table is not empty.
  - Added the required column `n_sesiones_planificadas` to the `bitacora_mensual` table without a default value. This is not possible if the table is not empty.
  - Added the required column `n_sesiones_realizadas` to the `bitacora_mensual` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "bitacora_anual" ADD COLUMN     "year" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "bitacora_mensual" DROP COLUMN "n_sesiones",
ADD COLUMN     "n_sesiones_planificadas" INTEGER NOT NULL,
ADD COLUMN     "n_sesiones_realizadas" INTEGER NOT NULL;
