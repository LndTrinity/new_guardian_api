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
exports.criarAlerta = criarAlerta;
const console_1 = require("console");
const prisma_1 = require("../../generated/prisma");
const express_1 = require("express");
const prisma = new prisma_1.PrismaClient();
const router = (0, express_1.Router)();
// CREATE
function criarAlerta(descricao, ativo, dispositivoId, alertaId, gravidede) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            if (!descricao || ativo === undefined || !dispositivoId || !alertaId) {
                throw console_1.error;
            }
            const alerta = yield prisma.alerta.create({
                data: {
                    descricao,
                    ativo,
                    dispositivoId,
                    alertaId,
                    gravidede
                },
            });
            return (alerta);
        }
        catch (error) {
            return error;
        }
    });
}
router.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { descricao, ativo, dispositivoId, alertaId, gravidede } = req.body;
    try {
        if (!descricao || ativo === undefined || !dispositivoId || !alertaId) {
            throw console_1.error;
        }
        const alerta = yield prisma.alerta.create({
            data: {
                descricao,
                ativo,
                dispositivoId,
                alertaId,
                gravidede,
            },
        });
        res.status(201).json(alerta);
    }
    catch (error) {
        res.status(500).json({ erro: "Erro ao criar alerta", detalhes: error });
    }
}));
router.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const alertas = yield prisma.alerta.findMany({
            where: { dispositivoId: id }
        });
        res.status(200).json(alertas);
    }
    catch (error) {
        res.status(500).json({ erro: "Erro ao buscar alertas", detalhes: error });
    }
}));
// READ 
router.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const alertas = yield prisma.alerta.findMany({
            include: {
                dispositivo: true,
                alertaTipo: true, // inclui dados do tipo de alerta (Alerta_tipo)
            },
        });
        res.status(200).json(alertas);
    }
    catch (error) {
        res.status(500).json({ erro: "Erro ao buscar alertas", detalhes: error });
    }
}));
// READ PELO ID DO DISPOSITIVO
router.get("/_/:idDispositivo", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { idDispositivo } = req.params;
    const id = idDispositivo;
    try {
        const alertas = yield prisma.alerta.findMany({
            where: { dispositivoId: id },
            include: { alertaTipo: true, dispositivo: true }
        });
        res.status(200).json(alertas);
    }
    catch (error) {
        res.status(500).json({ erro: "Erro ao buscar alertas", detalhes: error });
    }
}));
// UPDATE
router.put("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { descricao, ativo, dispositivoId, alertaId } = req.body;
    try {
        const alerta = yield prisma.alerta.update({
            where: { id: Number(id) },
            data: {
                descricao,
                ativo,
                dispositivoId,
                alertaId,
            },
        });
        res.json(alerta);
    }
    catch (error) {
        res.status(400).json({ erro: "Erro ao atualizar alerta", detalhes: error });
    }
}));
router.patch("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const dados = req.body;
    try {
        const alerta = yield prisma.alerta.update({
            where: { id: Number(id) },
            data: dados
        });
        res.status(200).json(alerta);
    }
    catch (error) {
        console.log(error);
        res.status(400).json({ erro: "Erro ao atualizar alerta", detalhes: error });
    }
}));
// DELETE 
router.delete("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const alerta = yield prisma.alerta.delete({
            where: { id: Number(id) },
        });
        res.json(alerta);
    }
    catch (error) {
        res.status(400).json({ erro: "Erro ao deletar alerta", detalhes: error });
    }
}));
exports.default = router;
//# sourceMappingURL=alerta.js.map