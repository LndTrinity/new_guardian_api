"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.retorna_por_id = retorna_por_id;
exports.retorna_alertas_por_id = retorna_alertas_por_id;
const prisma_client_1 = require("../utils/prisma-client");
const express_1 = require("express");
const prisma = new prisma_client_1.PrismaClient();
const router = (0, express_1.Router)();
//                                              CRUD
// CREATE
router.post('/cadastro', async (req, res) => {
    const { modelo, numero_de_serie, data_fabricacao } = req.body;
    if (!modelo || !numero_de_serie || !data_fabricacao) {
        res.status(400).json({ erro: "Todos os dados" });
        return;
    }
    try {
        // Converter a data para um objeto Date
        const dataConvertida = new Date(data_fabricacao);
        // Verifica se a data é válida
        if (isNaN(dataConvertida.getTime())) {
            res.status(400).json({ erro: "Data de fabricação inválida" });
            return;
        }
        const verifica_numero_serie = await prisma.dispositivo.findMany({
            where: { numero_de_serie }
        });
        if (verifica_numero_serie.length > 0) {
            res.status(409).json({ erro: "Numero de serie existente" });
            return;
        }
        const transaction = await prisma.$transaction(async (prisma) => {
            const dispositivo = await prisma.dispositivo.create({
                data: {
                    modelo, numero_de_serie, data_fabricacao: dataConvertida
                }
            });
            const config = await prisma.dispositivo_config.create({
                data: {
                    intervalo_envio: Number(15),
                    monitoramentoLigado: true,
                    dispositivoId: dispositivo.id,
                },
            });
            res.status(201).json(dispositivo);
        });
    }
    catch (error) {
        res.status(400).json(error);
        console.log(error);
    }
});
// READ
router.get("/", async (req, res) => {
    try {
        const dispositivo = await prisma.dispositivo.findMany({});
        res.status(200).json(dispositivo);
    }
    catch (error) {
        res.status(400).json(error);
    }
});
// READ ID
async function retorna_por_id(id) {
    const dispositivo = await prisma.dispositivo.findMany({
        where: { id },
        include: { alertas: true, config: true, localizacoes: { orderBy: { data_hora: "desc" } } }
    });
    return dispositivo;
}
async function retorna_alertas_por_id(id) {
    try {
        const dispositivo = await prisma.dispositivo.findMany({
            where: {
                id: id,
                alertas: {
                    some: { ativo: true }
                }
            },
            include: {
                alertas: true
            }
        });
        return dispositivo;
    }
    catch (error) {
        return error;
    }
}
router.get("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const dispositivo = await retorna_por_id(id);
        res.status(200).json(dispositivo);
    }
    catch (error) {
        res.status(400).json(error);
    }
});
// UPDATE
router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const data = req.body;
        const dispositivo = await prisma.dispositivo.update({ where: { id: id }, data });
        res.json(dispositivo);
    }
    catch (error) {
        res.status(400).json({ error: "Erro ao atualizar dispositivo." });
    }
});
// DELETE USANDO SOFT DELETE(DELETA FOFO)
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const data = req.body;
        const usuario = await prisma.usuario.delete({ where: { id: id } });
        res.json(usuario);
    }
    catch (error) {
        res.status(400).json({ error: "Erro ao atualizar usuário." });
    }
});
exports.default = router;
