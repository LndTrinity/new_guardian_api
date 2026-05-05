/*
  Warnings:

  - The primary key for the `alertas` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `alertas_tipo` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `dispositivo_id` on the `alertas_tipo` table. All the data in the column will be lost.
  - Added the required column `dispositivoId` to the `alertas_tipo` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `alertas` DROP FOREIGN KEY `alertas_alertaId_fkey`;

-- DropIndex
DROP INDEX `alertas_alertaId_fkey` ON `alertas`;

-- Truncate tables to allow schema changes (no data to preserve)
TRUNCATE TABLE `alertas`;
TRUNCATE TABLE `alertas_tipo`;

-- AlterTable
ALTER TABLE `alertas` DROP PRIMARY KEY,
    MODIFY `id` VARCHAR(60) NOT NULL,
    MODIFY `alertaId` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `alertas_tipo` DROP PRIMARY KEY,
    DROP COLUMN `dispositivo_id`,
    ADD COLUMN `dispositivoId` VARCHAR(191) NOT NULL,
    ADD COLUMN `usuarioId` VARCHAR(191) NULL,
    MODIFY `id` VARCHAR(60) NOT NULL,
    MODIFY `valor` VARCHAR(180) NOT NULL DEFAULT '',
    ADD PRIMARY KEY (`id`);

-- AddForeignKey
ALTER TABLE `alertas` ADD CONSTRAINT `alertas_alertaId_fkey` FOREIGN KEY (`alertaId`) REFERENCES `alertas_tipo`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `alertas_tipo` ADD CONSTRAINT `alertas_tipo_dispositivoId_fkey` FOREIGN KEY (`dispositivoId`) REFERENCES `dispositivos`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `alertas_tipo` ADD CONSTRAINT `alertas_tipo_usuarioId_fkey` FOREIGN KEY (`usuarioId`) REFERENCES `usuarios`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
