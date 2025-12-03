"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = require("../../generated/prisma");
const express_1 = require("express");
const alerta_1 = require("./alerta");
const prisma = new prisma_1.PrismaClient();
const router = (0, express_1.Router)();
// CREATE
router.post("/", async (req, res) => {
    const jsonString = JSON.stringify(req.body);
    const { longitude, latitude, NumSerie, descricao, status_bateria, banda_dados } = req.body;
    let descricao_ = descricao;
    const BuscaId = await prisma.dispositivo.findMany({
        where: { numero_de_serie: String(NumSerie) }, select: { id: true }
    });
    var banda_dados_ = 0;
    const bytes_quant = Buffer.byteLength(jsonString, "utf8");
    const kilobytes = Number(bytes_quant / 1024);
    banda_dados_ = kilobytes;
    const dispositivoId = BuscaId[0].id;
    // salva no log
    // try {
    //   if (longitude === undefined || latitude === undefined || BuscaId.length == 0){
    //     throw error
    //   }
    //   if (!descricao ){
    //     descricao_ = " "
    //   }
    //   const log = await prisma.dispositivo_log.create({
    //     data: {
    //       data_hora: new Date(),
    //       status_bateria,
    //       descricao: descricao_,
    //       banda_dados: banda_dados_.toString(),
    //       dispositivoId,
    //     },
    //   });
    // } catch (error) {
    //   console.log("erro: Erro ao criar log.", error)
    // }
    try {
        const bateria_statu = await prisma.dispositivo.update({
            where: { id: dispositivoId }, data: { bateria: Number(status_bateria) }
        });
        const dispositivo = await prisma.dispositivo.findUnique({
            where: { id: dispositivoId }, include: { config: true }
        });
        let bateria = 15;
        if (dispositivo?.config[0].alerta_bateria_valor != null) {
            bateria = dispositivo?.config[0].alerta_bateria_valor;
        }
        if (Number(status_bateria) <= bateria && dispositivo?.config[0].alerta_bateria == true) {
            console.log("!");
            const descricao = "Bateria Baixa";
            const ativo = true;
            const alertaId = 1;
            const gravidede = "Aviso_amarelo";
            const criar = (0, alerta_1.criarAlerta)(descricao, ativo, dispositivoId, alertaId, gravidede);
        }
        const localizacao = await prisma.localizacao.create({
            data: {
                longitude,
                latitude,
                data_hora: new Date(),
                dispositivoId,
            },
        });
        res.status(201).json(localizacao);
    }
    catch (error) {
        res.status(500).json({ erro: "Erro ao registrar localização.", detalhes: error });
    }
});
;
// READ
router.get("/:dispositivoId", async (req, res) => {
    const { dispositivoId } = req.params;
    console.log("acionado");
    try {
        const localizacoes = await prisma.localizacao.findMany({
            where: dispositivoId ? { dispositivoId: String(dispositivoId) } : undefined,
            include: {
                dispositivo: true, // incluir dados do dispositivo, opcional
            },
            orderBy: {
                data_hora: "desc",
            },
        });
        res.json(localizacoes);
    }
    catch (error) {
        res.status(500).json({ erro: "Erro ao buscar localizações.", detalhes: error });
    }
});
// UPDATE
router.put("/:id", async (req, res) => {
    const { id } = req.params;
    const { longitude, latitude, data_hora, dispositivoId } = req.body;
    try {
        const localizacao = await prisma.localizacao.update({
            where: { id: Number(id) },
            data: {
                longitude,
                latitude,
                data_hora: new Date(data_hora),
                dispositivoId,
            },
        });
        res.json(localizacao);
    }
    catch (error) {
        res.status(400).json({ erro: "Erro ao atualizar localização.", detalhes: error });
    }
});
// DELETE
router.delete("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const localizacao = await prisma.localizacao.delete({
            where: { id: Number(id) },
        });
        res.json(localizacao);
    }
    catch (error) {
        res.status(400).json({ erro: "Erro ao deletar localização.", detalhes: error });
    }
});
// READ - Lista localizações com filtros opcionais
router.get("/", async (req, res) => {
    const { dispositivoId, start, end, limit } = req.query;
    // Monta filtro condicionalmente
    const where = {};
    if (dispositivoId) {
        where.dispositivoId = Number(dispositivoId);
    }
    if (start || end) {
        where.data_hora = {};
        if (start)
            where.data_hora.gte = new Date(start);
        if (end)
            where.data_hora.lte = new Date(end);
    }
    try {
        const localizacoes = await prisma.localizacao.findMany({
            where,
            include: {
                dispositivo: true,
            },
            orderBy: {
                data_hora: "desc",
            },
            take: limit ? Number(limit) : undefined,
        });
        res.json(localizacoes);
    }
    catch (error) {
        res.status(500).json({ erro: "Erro ao buscar localizações.", detalhes: error });
    }
});
router.post("/historico", async (req, res) => {
    const { dispositivoId, start, limit } = req.body;
    const where = {};
    console.log(start);
    if (dispositivoId) {
        where.dispositivoId = Number(dispositivoId);
    }
    const data = new Date(start);
    console.log(data);
    const fimDoDia = new Date(data);
    fimDoDia.setHours(23 + 21, 59, 59);
    console.log(data);
    try {
        const localizacoes = await prisma.localizacao.findMany({
            where: {
                data_hora: {
                    gte: data,
                    lte: fimDoDia
                }
            },
            include: {
                dispositivo: true,
            },
            orderBy: {
                data_hora: "desc",
            },
            take: limit ? Number(limit) : undefined,
        });
        res.json(localizacoes);
    }
    catch (error) {
        // console.log(error)
        res.status(500).json({ erro: "Erro ao buscar localizações.", detalhes: error });
    }
});
exports.default = router;
/*
Últimas 10 localizações de um dispositivo:

    GET /localizacao?dispositivoId=1&limit=10

Localizações de 1º a 30 de junho de 2025:

    GET /localizacao?start=2025-06-01T00:00:00Z&end=2025-06-30T23:59:59Z

Últimas 5 localizações de um dispositivo dentro de um período:

    GET /localizacao?dispositivoId=2&start=2025-07-01&end=2025-07-02&limit=5

OBS:
Os parâmetros start e end devem estar no formato ISO (ex: 2025-07-01T00:00:00Z), mas strings tipo 2025-07-01 também funcionam.
*/
