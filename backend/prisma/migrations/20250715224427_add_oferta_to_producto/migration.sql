/*
  Warnings:

  - You are about to drop the column `productoId` on the `oferta` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `oferta` DROP FOREIGN KEY `Oferta_productoId_fkey`;

-- DropIndex
DROP INDEX `Oferta_productoId_key` ON `oferta`;

-- AlterTable
ALTER TABLE `oferta` DROP COLUMN `productoId`;

-- AddForeignKey
ALTER TABLE `Producto` ADD CONSTRAINT `Producto_ofertaId_fkey` FOREIGN KEY (`ofertaId`) REFERENCES `Oferta`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
