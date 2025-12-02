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
exports.retorna_por_id = retorna_por_id;
exports.retorna_alertas_por_id = retorna_alertas_por_id;
const prisma_1 = require("../../generated/prisma");
const express_1 = require("express");
const prisma = new prisma_1.PrismaClient();
const router = (0, express_1.Router)();
//                                              CRUD
// CREATE
router.post('/cadastro', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
        const verifica_numero_serie = yield prisma.dispositivo.findMany({
            where: { numero_de_serie }
        });
        if (verifica_numero_serie.length > 0) {
            res.status(409).json({ erro: "Numero de serie existente" });
            return;
        }
        const transaction = yield prisma.$transaction((prisma) => __awaiter(void 0, void 0, void 0, function* () {
            const dispositivo = yield prisma.dispositivo.create({
                data: {
                    modelo, numero_de_serie, data_fabricacao: dataConvertida
                }
            });
            const config = yield prisma.dispositivo_config.create({
                data: {
                    intervalo_envio: Number(15),
                    monitoramentoLigado: true,
                    dispositivoId: dispositivo.id,
                },
            });
            res.status(201).json(dispositivo);
        }));
    }
    catch (error) {
        res.status(400).json(error);
        console.log(error);
    }
}));
// READ
router.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const dispositivo = yield prisma.dispositivo.findMany({});
        res.status(200).json(dispositivo);
    }
    catch (error) {
        res.status(400).json(error);
    }
}));
// READ ID
function retorna_por_id(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const dispositivo = yield prisma.dispositivo.findMany({
            where: { id },
            include: { alertas: true, config: true, localizacoes: { orderBy: { data_hora: "desc" } } }
        });
        return dispositivo;
    });
}
function retorna_alertas_por_id(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const dispositivo = yield prisma.dispositivo.findMany({
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
    });
}
router.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const dispositivo = yield retorna_por_id(id);
        res.status(200).json(dispositivo);
    }
    catch (error) {
        res.status(400).json(error);
    }
}));
// UPDATE
router.put('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const data = req.body;
        const dispositivo = yield prisma.dispositivo.update({ where: { id: id }, data });
        res.json(dispositivo);
    }
    catch (error) {
        res.status(400).json({ error: "Erro ao atualizar dispositivo." });
    }
}));
// DELETE USANDO SOFT DELETE(DELETA FOFO)
router.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const data = req.body;
        const usuario = yield prisma.usuario.delete({ where: { id: id } });
        res.json(usuario);
    }
    catch (error) {
        res.status(400).json({ error: "Erro ao atualizar usuário." });
    }
}));
exports.default = router;
//# sourceMappingURL=dispositivo.js.map