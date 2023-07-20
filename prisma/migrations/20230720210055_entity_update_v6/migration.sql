/*
  Warnings:

  - You are about to drop the column `id_facultad` on the `history` table. All the data in the column will be lost.
  - You are about to drop the column `id_sede` on the `history` table. All the data in the column will be lost.
  - Added the required column `id_carrera` to the `history` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "history" DROP CONSTRAINT "history_id_facultad_fkey";

-- DropForeignKey
ALTER TABLE "history" DROP CONSTRAINT "history_id_sede_fkey";

-- AlterTable
ALTER TABLE "history" DROP COLUMN "id_facultad",
DROP COLUMN "id_sede",
ADD COLUMN     "id_carrera" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "history" ADD CONSTRAINT "history_id_carrera_fkey" FOREIGN KEY ("id_carrera") REFERENCES "carrera"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
