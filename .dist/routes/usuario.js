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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = require("../../generated/prisma");
const express_1 = require("express");
const utils_1 = require("../utils/utils");
const bcrypt_1 = __importDefault(require("bcrypt"));
const prisma = new prisma_1.PrismaClient();
const router = (0, express_1.Router)();
//                                              CRUD
// TOKEN
router.post("/cadastro/token", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { codigo, email } = req.body;
    const dezMinutosAtras = new Date(Date.now() - 10 * 60 * 1000);
    const cliente = yield prisma.tokens.findMany({
        where: {
            codigo: codigo, email: email, deleted: false, createdAt: {
                gte: dezMinutosAtras
            }
        }
    });
    if (cliente.length == 0) {
        res.status(400).json({ erro: "Código incorreto" });
        return;
    }
    const usuarioId = yield prisma.usuario.findUnique({
        where: { email: email }, select: { id: true }
    });
    if (!usuarioId) {
        res.status(400).json({ erro: "Usuário não encontrado" });
        return;
    }
    const atualizaCliente = yield prisma.usuario.update({
        where: { id: usuarioId.id }, data: {
            deleted: false
        }
    });
    const atualizaToken = yield prisma.tokens.update({
        where: {
            id: cliente[0].id, // O token que você quer atualizar
        },
        data: {
            deleted: true, // Atualiza o campo para marcar o token como usado
        },
    });
    res.status(201).json(cliente);
}));
// READ DISPOSITIVO
router.get("/dispos/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const dispositivos = yield prisma.dispositivo.findMany({
            where: { usuarioId: id },
            select: {
                id: true,
                nome: true,
                modelo: true,
                config: true,
                status: true,
                bateria: true,
                localizacoes: {
                    orderBy: { data_hora: "desc" },
                    take: 1,
                    select: { data_hora: true }
                }
            }
        });
        const resultado = dispositivos.map(d => {
            var _a;
            return (Object.assign(Object.assign({}, d), { ultimaAtt: ((_a = d.localizacoes[0]) === null || _a === void 0 ? void 0 : _a.data_hora) || null }));
        });
        res.status(200).json(resultado);
    }
    catch (error) {
        console.error(error);
        res.status(400).json({ error: "Erro ao buscar dispositivos" });
    }
}));
// CREATE
router.post("/cadastro", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { nome, email, senha, cpf } = req.body;
    if (!nome || !email || !senha || !cpf) {
        res.status(400).json({ erro: "Informe nome, email e senha" });
        return;
    }
    const erros = (0, utils_1.validaSenha)(senha);
    if (erros.length > 0) {
        res.status(400).json({ erro: erros.join("; ") });
        return;
    }
    const clienteEmail = yield prisma.usuario.findMany({
        where: { email: email }
    });
    const clienteCpf = yield prisma.usuario.findMany({
        where: { cpf: cpf }
    });
    if (clienteEmail.length > 0) {
        res.status(400).json({ erro: "Email ja cadastrado" });
        return;
    }
    if (clienteCpf.length > 0) {
        res.status(400).json({ erro: "Cpf ja cadastrado" });
        return;
    }
    // 12 é o número de voltas (repetições) que o algoritmo faz
    // para gerar o salt (sal/tempero)
    const salt = bcrypt_1.default.genSaltSync(12);
    // gera o hash da senha acrescida do salt
    const hash = bcrypt_1.default.hashSync(senha, salt);
    // para o campo senha, atribui o hash gerado
    try {
        const cliente = yield prisma.usuario.create({
            data: { nome, email, cpf, senha: hash }
        });
        res.status(201).json(cliente);
    }
    catch (error) {
        res.status(400).json(error);
    }
}));
// READ
router.get("/all", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const usuarios = yield prisma.usuario.findMany();
        res.status(200).json(usuarios);
    }
    catch (error) {
        res.status(400).json(error);
    }
}));
router.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const usuarios = yield prisma.usuario.findMany({
            where: { deleted: false }
        });
        res.status(200).json(usuarios);
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
        const usuario = yield prisma.usuario.update({ where: { id: id }, data });
        res.json(usuario);
    }
    catch (error) {
        res.status(400).json({ error: "Erro ao atualizar usuário." });
    }
}));
// DELETE USANDO SOFT DELETE(DELETA FOFO)
router.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const data = req.body;
        const usuario = yield prisma.usuario.update({ where: { id: id }, data: { deleted: true } });
        res.json(usuario);
    }
    catch (error) {
        res.status(400).json({ error: "Erro ao atualizar usuário." });
    }
}));
// RETORNO POR ID
function buscarUsuarioPorId(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield prisma.usuario.findUnique({
            where: { id },
            include: { dispositivos: true }
        });
    });
}
router.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const usuarios = yield buscarUsuarioPorId(id);
        res.status(200).json(usuarios);
    }
    catch (error) {
        res.status(400).json(error);
    }
}));
//RETORNA TODOS ALERTAS
router.get('/alertas/historico/:usuarioId', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { usuarioId } = req.params;
    try {
        // 1️⃣ Busca todos os dispositivos do usuário
        const dispositivos = yield prisma.dispositivo.findMany({
            where: { usuarioId },
            select: { id: true }
        });
        if (dispositivos.length === 0) {
            res.status(200).json([]);
        }
        // 2️⃣ Extrai todos os IDs de dispositivos
        const idsDispositivos = dispositivos.map(d => d.id);
        const alertas = yield prisma.alerta.findMany({
            where: {
                dispositivoId: { in: idsDispositivos }
                // opcional: adicionar filtros extras, ex: activade: true
            }, include: { dispositivo: true },
            orderBy: { createdAt: "desc" }
        });
        if (alertas.length == 0) {
            res.status(200).json([]);
        }
        // 4️⃣ Retorna tudo num único JSON
        res.status(200).json(alertas);
    }
    catch (error) {
        console.error(error);
        res.status(400).json({
            erro: "Erro ao buscar alertas do usuário",
            detalhes: error
        });
    }
}));
//RETORNA TODOS ALERTAS TIVOS
router.get('/alertas/:usuarioId', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { usuarioId } = req.params;
    try {
        // 1️⃣ Busca todos os dispositivos do usuário
        const dispositivos = yield prisma.dispositivo.findMany({
            where: { usuarioId },
            select: { id: true }
        });
        if (dispositivos.length === 0) {
            res.status(200).json(res.status(200).json([]));
        }
        // 2️⃣ Extrai todos os IDs de dispositivos
        const idsDispositivos = dispositivos.map(d => d.id);
        const alertas = yield prisma.alerta.findMany({
            where: {
                dispositivoId: { in: idsDispositivos },
                ativo: true
                // opcional: adicionar filtros extras, ex: activade: true
            }, include: { dispositivo: true, alertaTipo: true },
            orderBy: { createdAt: "desc" }
        });
        if (alertas.length === 0) {
            res.status(200).json([]);
        }
        // 4️⃣ Retorna tudo num único JSON
        res.status(200).json(alertas);
    }
    catch (error) {
        console.error(error);
        res.status(400).json({
            erro: "Erro ao buscar alertas do usuário",
            detalhes: error
        });
    }
}));
//LOGIN
router.post("/login", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, senha } = req.body;
    const mensaPadrao = "Login ou senha incorretos";
    if (!email || !senha) {
        res.status(400).json({ erro: mensaPadrao });
        return;
    }
    try {
        const usuario = yield prisma.usuario.findUnique({
            where: { email }
        });
        if (usuario == null) {
            res.status(400).json({ erro: mensaPadrao });
            return;
        }
        const senhaValida = yield bcrypt_1.default.compareSync(senha, usuario.senha);
        if (senhaValida) {
            res.status(200).json({ id: usuario.id, nome: usuario.nome });
        }
        else {
            res.status(400).json({ erro: mensaPadrao });
        }
    }
    catch (error) {
        res.status(400).json(error);
    }
}));
// VINCULA UM DISPOSITIVO A UM USUARIO
router.post('/vincularDispositivo', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { numero_dispositivo, id_usuario, nome_dispositivo } = req.body;
    if (!numero_dispositivo || !id_usuario) {
        res.status(400).json({ erro: "Informe todos os dados" });
        console.log("!-");
        return;
    }
    const dispositivos = yield prisma.dispositivo.findMany({
        where: { numero_de_serie: numero_dispositivo }
    });
    console.log(numero_dispositivo);
    console.log(nome_dispositivo);
    console.log(id_usuario);
    if (dispositivos.length <= 0) {
        res.status(400).json({ erro: "Dispositivo não encontrado" });
        console.log("!");
        return;
    }
    const usuarios = yield prisma.usuario.findMany({
        where: { id: id_usuario }
    });
    const usuario_dispositivos = dispositivos[0].usuarioId;
    if (usuarios.length <= 0) {
        res.status(400).json({ erro: "Usuario não encontrado" });
        console.log("!!");
        return;
    }
    if (usuario_dispositivos != null) {
        res.status(400).json({ erro: "Dispositivo já cadastradado" });
        console.log("!!!");
        return;
    }
    try {
        if (nome_dispositivo) {
            const vincular = yield prisma.dispositivo.update({ where: { id: dispositivos[0].id }, data: { activade: true, usuarioId: id_usuario, nome: nome_dispositivo } });
            res.status(201).json(vincular);
        }
        else {
            const vincular = yield prisma.dispositivo.update({ where: { id: dispositivos[0].id }, data: { activade: true, usuarioId: id_usuario } });
            res.status(201).json(vincular);
        }
    }
    catch (error) {
        res.status(400).json(error);
    }
}));
exports.default = router;
//# sourceMappingURL=usuario.js.map