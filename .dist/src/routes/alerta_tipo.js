"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const console_1 = require("console");
const prisma_1 = require("../../generated/prisma");
const express_1 = require("express");
const prisma = new prisma_1.PrismaClient();
const router = (0, express_1.Router)();
/**
 * CREATE - Cria um novo tipo de alerta
 */
router.post("/", async (req, res) => {
    const { nome, regra, valor } = req.body;
    try {
        if (!nome || !regra) {
            throw console_1.error;
        }
        // Verifica duplicidade de nome
        const nomeExiste = await prisma.alerta_tipo.findFirst({
            where: { nome },
        });
        if (nomeExiste) {
            throw console_1.error;
        }
        const tipo = await prisma.alerta_tipo.create({
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
});
// READ 
router.get("/", async (_req, res) => {
    try {
        const tipos = await prisma.alerta_tipo.findMany({});
        res.json(tipos);
    }
    catch (error) {
        res.status(500).json({ erro: "Erro ao buscar tipos de alerta.", detalhes: error });
    }
});
// UPDATE 
router.put("/:id", async (req, res) => {
    const { id } = req.params;
    const { nome, regra } = req.body;
    try {
        const tipo = await prisma.alerta_tipo.update({
            where: { id: Number(id) },
            data: { nome, regra },
        });
        res.json(tipo);
    }
    catch (error) {
        res.status(400).json({ erro: "Erro ao atualizar tipo de alerta.", detalhes: error });
    }
});
// DELETE
router.delete("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const tipo = await prisma.alerta_tipo.delete({
            where: { id: Number(id) }
        });
        res.json(tipo);
    }
    catch (error) {
        res.status(400).json({ erro: "Erro ao deletar tipo de alerta.", detalhes: error });
    }
});
exports.default = router;
