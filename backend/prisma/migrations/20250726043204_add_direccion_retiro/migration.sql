-- AlterTable
ALTER TABLE `pedido` ADD COLUMN `direccionRetiroId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `Pedido` ADD CONSTRAINT `Pedido_direccionRetiroId_fkey` FOREIGN KEY (`direccionRetiroId`) REFERENCES `Sucursal`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
