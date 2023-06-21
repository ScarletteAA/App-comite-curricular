/*
  Warnings:

  - You are about to drop the `user` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `descripcion` to the `history` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fecha` to the `history` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_asesora` to the `history` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_facultad` to the `history` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_sede` to the `history` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "history" ADD COLUMN     "descripcion" TEXT NOT NULL,
ADD COLUMN     "fecha" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "id_asesora" TEXT NOT NULL,
ADD COLUMN     "id_facultad" TEXT NOT NULL,
ADD COLUMN     "id_sede" TEXT NOT NULL;

-- DropTable
DROP TABLE "user";

-- AddForeignKey
ALTER TABLE "history" ADD CONSTRAINT "history_id_asesora_fkey" FOREIGN KEY ("id_asesora") REFERENCES "asesora"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "history" ADD CONSTRAINT "history_id_sede_fkey" FOREIGN KEY ("id_sede") REFERENCES "sede"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "history" ADD CONSTRAINT "history_id_facultad_fkey" FOREIGN KEY ("id_facultad") REFERENCES "facultad"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
