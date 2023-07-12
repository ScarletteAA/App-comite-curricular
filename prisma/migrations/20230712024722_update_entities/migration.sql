/*
  Warnings:

  - You are about to drop the column `carreraId` on the `asignatura` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "asignatura" DROP CONSTRAINT "asignatura_carreraId_fkey";

-- AlterTable
ALTER TABLE "asignatura" DROP COLUMN "carreraId";
