/*
  Warnings:

  - A unique constraint covering the columns `[id_carrera]` on the table `historico` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `codigo_carrera` to the `carrera` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "carrera" ADD COLUMN     "codigo_carrera" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "historico_id_carrera_key" ON "historico"("id_carrera");
