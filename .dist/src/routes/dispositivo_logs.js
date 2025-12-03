"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = require("../../generated/prisma");
const express_1 = require("express");
const prisma = new prisma_1.PrismaClient();
const router = (0, express_1.Router)();
/**
 * CREATE - Cria um novo log do dispositivo
 */
router.post("/", async (req, res) => {
    const { data_hora, status_bateria, descricao, banda_dados, dispositivoId } = req.body;
    if (!data_hora || !status_bateria || !banda_dados || !dispositivoId) {
        res.status(400).json({
            erro: "Campos obrigatórios: data_hora, status_bateria, banda_dados, dispositivoId",
        });
        return;
    }
    try {
        const log = await prisma.dispositivo_log.create({
            data: {
                data_hora: new Date(),
                status_bateria,
                descricao,
                banda_dados,
                dispositivoId,
            },
        });
        res.status(201).json(log);
    }
    catch (error) {
        res.status(500).json({ erro: "Erro ao criar log.", detalhes: error });
    }
});
/**
 * READ - Lista todos os logs ou filtra por dispositivoId
 */
router.get("/", async (req, res) => {
    const { dispositivoId, limit } = req.query;
    try {
        const logs = await prisma.dispositivo_log.findMany({
            where: dispositivoId
                ? {
                    dispositivoId: String(dispositivoId),
                }
                : undefined,
            orderBy: {
                data_hora: "desc",
            },
            take: limit ? Number(limit) : undefined,
            include: {
                dispositivo: true,
            },
        });
        res.json(logs);
    }
    catch (error) {
        res.status(500).json({ erro: "Erro ao buscar logs.", detalhes: error });
    }
});
/**
 * UPDATE - Atualiza um log por ID
 */
router.put("/:id", async (req, res) => {
    const { id } = req.params;
    const { data_hora, status_bateria, descricao, banda_dados, dispositivoId } = req.body;
    try {
        const log = await prisma.dispositivo_log.update({
            where: { id: Number(id) },
            data: {
                data_hora: new Date(data_hora),
                status_bateria,
                descricao,
                banda_dados,
                dispositivoId,
            },
        });
        res.json(log);
    }
    catch (error) {
        res.status(400).json({ erro: "Erro ao atualizar log.", detalhes: error });
    }
});
/**
 * DELETE - Deleta um log por ID
 */
router.delete("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const log = await prisma.dispositivo_log.delete({
            where: { id: Number(id) },
        });
        res.json(log);
    }
    catch (error) {
        res.status(400).json({ erro: "Erro ao deletar log.", detalhes: error });
    }
});
exports.default = router;
