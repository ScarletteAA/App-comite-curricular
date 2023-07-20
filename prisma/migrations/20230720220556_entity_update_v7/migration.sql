/*
  Warnings:

  - You are about to drop the column `id_asesora` on the `history` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "history" DROP CONSTRAINT "history_id_asesora_fkey";

-- AlterTable
ALTER TABLE "history" DROP COLUMN "id_asesora";
