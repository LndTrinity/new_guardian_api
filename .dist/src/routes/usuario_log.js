"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_client_1 = require("../utils/prisma-client");
const express_1 = require("express");
const prisma = new prisma_client_1.PrismaClient();
const router = (0, express_1.Router)();
// CREATE - Criar um novo log de usuário
router.post("/", async (req, res) => {
    const { descricao, data_hora, usuarioId } = req.body;
    if (!descricao || !data_hora || !usuarioId) {
        res.status(400).json({ erro: "Campos obrigatórios: descricao, data_hora, usuarioId" });
        return;
    }
    try {
        const log = await prisma.usuario_log.create({
            data: {
                descricao,
                data_hora: new Date(data_hora),
                usuarioId,
            },
        });
        res.status(201).json(log);
    }
    catch (error) {
        res.status(500).json({ erro: "Erro ao criar log de usuário.", detalhes: error });
    }
});
// READ - Listar logs de usuários, opcionalmente filtrando por usuarioId
router.get("/", async (req, res) => {
    const { usuarioId, limit } = req.query;
    try {
        const logs = await prisma.usuario_log.findMany({
            where: usuarioId ? { usuarioId: String(usuarioId) } : undefined,
            orderBy: { data_hora: "desc" },
            take: limit ? Number(limit) : undefined,
            include: { usuario: true },
        });
        res.json(logs);
    }
    catch (error) {
        res.status(500).json({ erro: "Erro ao buscar logs de usuários.", detalhes: error });
    }
});
// UPDATE - Atualizar um log pelo ID
router.put("/:id", async (req, res) => {
    const { id } = req.params;
    const { descricao, data_hora, usuarioId } = req.body;
    try {
        const log = await prisma.usuario_log.update({
            where: { id: Number(id) },
            data: {
                descricao,
                data_hora: new Date(data_hora),
                usuarioId,
            },
        });
        res.json(log);
    }
    catch (error) {
        res.status(400).json({ erro: "Erro ao atualizar log de usuário.", detalhes: error });
    }
});
// DELETE - Deletar um log pelo ID
router.delete("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const log = await prisma.usuario_log.delete({
            where: { id: Number(id) },
        });
        res.json(log);
    }
    catch (error) {
        res.status(400).json({ erro: "Erro ao deletar log de usuário.", detalhes: error });
    }
});
exports.default = router;
