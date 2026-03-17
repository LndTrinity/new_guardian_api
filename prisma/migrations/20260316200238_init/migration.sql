-- CreateTable
CREATE TABLE `usuarios` (
    `id` VARCHAR(60) NOT NULL,
    `nome` VARCHAR(45) NOT NULL,
    `email` VARCHAR(45) NOT NULL,
    `cpf` VARCHAR(11) NOT NULL,
    `senha` VARCHAR(60) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `deleted` BOOLEAN NOT NULL DEFAULT false,

    UNIQUE INDEX `usuarios_email_key`(`email`),
    UNIQUE INDEX `usuarios_cpf_key`(`cpf`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Tokens` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `codigo` VARCHAR(6) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `email` VARCHAR(20) NOT NULL,
    `deleted` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `dispositivos` (
    `id` VARCHAR(60) NOT NULL,
    `nome` VARCHAR(20) NOT NULL DEFAULT 'no_user',
    `modelo` VARCHAR(45) NOT NULL,
    `numero_de_serie` VARCHAR(45) NOT NULL,
    `activade` BOOLEAN NOT NULL DEFAULT false,
    `data_fabricacao` DATETIME(3) NOT NULL,
    `usuarioId` VARCHAR(191) NULL,
    `bateria` INTEGER NOT NULL DEFAULT 0,
    `status` ENUM('Em_movimento', 'Parado', 'Ligado', 'Desligado', 'Standby') NOT NULL DEFAULT 'Desligado',

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `dispositivo_config` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `intervalo_envio` INTEGER NOT NULL,
    `monitoramentoLigado` BOOLEAN NOT NULL DEFAULT true,
    `dispositivoId` VARCHAR(191) NOT NULL,
    `modo_eco` BOOLEAN NOT NULL DEFAULT false,
    `alerta_sem_sinal` BOOLEAN NOT NULL DEFAULT false,
    `alerta_bateria` BOOLEAN NOT NULL DEFAULT false,
    `alerta_bateria_valor` INTEGER NOT NULL DEFAULT 15,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `alertas` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `descricao` VARCHAR(45) NOT NULL,
    `gravidede` ENUM('Alerta_vermelho', 'Aviso_amarelo') NOT NULL DEFAULT 'Aviso_amarelo',
    `ativo` BOOLEAN NOT NULL,
    `dispositivoId` VARCHAR(191) NOT NULL,
    `alertaId` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `alertas_tipo` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(45) NOT NULL,
    `regra` VARCHAR(45) NOT NULL,
    `valor` VARCHAR(70) NOT NULL DEFAULT '',

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `localizacoes` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `longitude` DECIMAL(65, 30) NOT NULL,
    `latitude` DECIMAL(65, 30) NOT NULL,
    `data_hora` DATETIME(3) NOT NULL,
    `dispositivoId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `dispositivo_log` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `data_hora` DATETIME(3) NOT NULL,
    `status_bateria` INTEGER NOT NULL,
    `descricao` VARCHAR(45) NULL,
    `banda_dados` VARCHAR(45) NOT NULL,
    `dispositivoId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `usuario_log` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `descricao` VARCHAR(45) NOT NULL,
    `data_hora` DATETIME(3) NOT NULL,
    `usuarioId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `dispositivos` ADD CONSTRAINT `dispositivos_usuarioId_fkey` FOREIGN KEY (`usuarioId`) REFERENCES `usuarios`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `dispositivo_config` ADD CONSTRAINT `dispositivo_config_dispositivoId_fkey` FOREIGN KEY (`dispositivoId`) REFERENCES `dispositivos`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `alertas` ADD CONSTRAINT `alertas_dispositivoId_fkey` FOREIGN KEY (`dispositivoId`) REFERENCES `dispositivos`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `alertas` ADD CONSTRAINT `alertas_alertaId_fkey` FOREIGN KEY (`alertaId`) REFERENCES `alertas_tipo`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `localizacoes` ADD CONSTRAINT `localizacoes_dispositivoId_fkey` FOREIGN KEY (`dispositivoId`) REFERENCES `dispositivos`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `dispositivo_log` ADD CONSTRAINT `dispositivo_log_dispositivoId_fkey` FOREIGN KEY (`dispositivoId`) REFERENCES `dispositivos`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `usuario_log` ADD CONSTRAINT `usuario_log_usuarioId_fkey` FOREIGN KEY (`usuarioId`) REFERENCES `usuarios`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
