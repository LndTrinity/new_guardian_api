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
/**
 * CREATE - Cria um novo log do dispositivo
 */
router.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { data_hora, status_bateria, descricao, banda_dados, dispositivoId } = req.body;
    if (!data_hora || !status_bateria || !banda_dados || !dispositivoId) {
        res.status(400).json({
            erro: "Campos obrigatórios: data_hora, status_bateria, banda_dados, dispositivoId",
        });
        return;
    }
    try {
        const log = yield prisma.dispositivo_log.create({
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
}));
/**
 * READ - Lista todos os logs ou filtra por dispositivoId
 */
router.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { dispositivoId, limit } = req.query;
    try {
        const logs = yield prisma.dispositivo_log.findMany({
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
}));
/**
 * UPDATE - Atualiza um log por ID
 */
router.put("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { data_hora, status_bateria, descricao, banda_dados, dispositivoId } = req.body;
    try {
        const log = yield prisma.dispositivo_log.update({
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
}));
/**
 * DELETE - Deleta um log por ID
 */
router.delete("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const log = yield prisma.dispositivo_log.delete({
            where: { id: Number(id) },
        });
        res.json(log);
    }
    catch (error) {
        res.status(400).json({ erro: "Erro ao deletar log.", detalhes: error });
    }
}));
exports.default = router;
//# sourceMappingURL=dispositivo_logs.js.map