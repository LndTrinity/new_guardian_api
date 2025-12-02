"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = require("../../generated/prisma");
const express_1 = require("express");
const prisma = new prisma_1.PrismaClient();
const router = (0, express_1.Router)();
// CREATE - Criar um novo log de usuário
router.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { descricao, data_hora, usuarioId } = req.body;
    if (!descricao || !data_hora || !usuarioId) {
        res.status(400).json({ erro: "Campos obrigatórios: descricao, data_hora, usuarioId" });
        return;
    }
    try {
        const log = yield prisma.usuario_log.create({
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
}));
// READ - Listar logs de usuários, opcionalmente filtrando por usuarioId
router.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { usuarioId, limit } = req.query;
    try {
        const logs = yield prisma.usuario_log.findMany({
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
}));
// UPDATE - Atualizar um log pelo ID
router.put("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { descricao, data_hora, usuarioId } = req.body;
    try {
        const log = yield prisma.usuario_log.update({
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
}));
// DELETE - Deletar um log pelo ID
router.delete("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const log = yield prisma.usuario_log.delete({
            where: { id: Number(id) },
        });
        res.json(log);
    }
    catch (error) {
        res.status(400).json({ erro: "Erro ao deletar log de usuário.", detalhes: error });
    }
}));
exports.default = router;
//# sourceMappingURL=usuario_log.js.map