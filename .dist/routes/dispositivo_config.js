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
router.post('/signin', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { intervalo_envio, monitoramentoLigado, dispositivoId } = req.body;
    if (!intervalo_envio || !monitoramentoLigado || !dispositivoId) {
        return;
    }
    try {
        const config = yield prisma.dispositivo_config.create({
            data: {
                intervalo_envio,
                monitoramentoLigado,
                dispositivoId,
            },
        });
        res.status(201).json(config);
    }
    catch (error) {
        res.status(500).json({ erro: "Erro ao criar configuração", detalhes: error });
    }
}));
// READ 
router.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const configs = yield prisma.dispositivo_config.findMany({
            include: {
                dispositivo: true, // opcional: incluir detalhes do dispositivo
            },
        });
        res.json(configs);
    }
    catch (error) {
        res.status(500).json({ erro: "Erro ao buscar configurações", detalhes: error });
    }
}));
router.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const config = yield prisma.dispositivo_config.findUnique({
            where: { id: Number(id) }
        });
        res.json(config);
    }
    catch (error) {
        res.status(500).json({ erro: "Erro ao buscar configurações", detalhes: error });
    }
}));
// UPDATE
router.put("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { intervalo_envio, monitoramentoLigado, dispositivoId, alerta_sem_sinal, alerta_bateria_valor, alerta_bateria } = req.body;
    // console.log(intervalo_envio, monitoramentoLigado, dispositivoId,alerta_sem_sinal, alerta_bateria_valor,alerta_bateria)
    // if( !intervalo_envio ||  monitoramentoLigado != Boolean || ! dispositivoId ||  alerta_sem_sinal != Boolean || !  alerta_bateria_valor ||  alerta_bateria != Boolean ){
    //   res.status(400).json("Erro")
    //   return
    // }
    try {
        const config = yield prisma.dispositivo_config.update({
            where: { id: Number(id) },
            data: {
                intervalo_envio: Number(intervalo_envio),
                monitoramentoLigado: Boolean(monitoramentoLigado),
                dispositivoId: String(dispositivoId),
                alerta_sem_sinal: Boolean(alerta_sem_sinal),
                alerta_bateria: Boolean(alerta_bateria),
                alerta_bateria_valor: Number(alerta_bateria_valor)
            },
        });
        res.status(200).json(config);
    }
    catch (error) {
        console.log(error);
        res.status(400).json({ erro: "Erro ao atualizar configuração", detalhes: error });
    }
}));
// DELETE 
router.delete("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const config = yield prisma.dispositivo_config.delete({
            where: { id: Number(id) },
        });
        res.json(config);
    }
    catch (error) {
        res.status(400).json({ erro: "Erro ao deletar configuração", detalhes: error });
    }
}));
exports.default = router;
//# sourceMappingURL=dispositivo_config.js.map