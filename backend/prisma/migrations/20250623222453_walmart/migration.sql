-- CreateTable
CREATE TABLE `Borrower` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `state` BOOLEAN NOT NULL DEFAULT true,
    `rut` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `mail` VARCHAR(191) NULL,

    UNIQUE INDEX `Borrower_rut_key`(`rut`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
