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
const console_1 = require("console");
const prisma_1 = require("../../generated/prisma");
const express_1 = require("express");
const prisma = new prisma_1.PrismaClient();
const router = (0, express_1.Router)();
/**
 * CREATE - Cria um novo tipo de alerta
 */
router.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { nome, regra, valor } = req.body;
    try {
        if (!nome || !regra) {
            throw console_1.error;
        }
        // Verifica duplicidade de nome
        const nomeExiste = yield prisma.alerta_tipo.findFirst({
            where: { nome },
        });
        if (nomeExiste) {
            throw console_1.error;
        }
        const tipo = yield prisma.alerta_tipo.create({
            data: {
                nome,
                regra,
                valor
            },
        });
        res.status(201).json(tipo);
    }
    catch (error) {
        res.status(500).json({ erro: "Erro ao criar tipo de alerta.", detalhes: error });
    }
}));
// READ 
router.get("/", (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tipos = yield prisma.alerta_tipo.findMany({});
        res.json(tipos);
    }
    catch (error) {
        res.status(500).json({ erro: "Erro ao buscar tipos de alerta.", detalhes: error });
    }
}));
// UPDATE 
router.put("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { nome, regra } = req.body;
    try {
        const tipo = yield prisma.alerta_tipo.update({
            where: { id: Number(id) },
            data: { nome, regra },
        });
        res.json(tipo);
    }
    catch (error) {
        res.status(400).json({ erro: "Erro ao atualizar tipo de alerta.", detalhes: error });
    }
}));
// DELETE
router.delete("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const tipo = yield prisma.alerta_tipo.delete({
            where: { id: Number(id) }
        });
        res.json(tipo);
    }
    catch (error) {
        res.status(400).json({ erro: "Erro ao deletar tipo de alerta.", detalhes: error });
    }
}));
exports.default = router;
//# sourceMappingURL=alerta_tipo.js.map