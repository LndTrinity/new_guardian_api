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
const utils_1 = require("../../utils/utils");
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
    else {
        const usuarioId = yield prisma.usuario.findFirst({
            where: { email: email }, select: { id: true }
        });
        const atualizaCliente = yield prisma.usuario.update({
            where: { id: String(usuarioId) }, data: {
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
    }
}));
// CREATE
router.post('/cadastro', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { nome, email, senha } = req.body;
    const dezMinutosAtras = new Date(Date.now() - 10 * 60 * 1000);
    if (!nome || !email || !senha) {
        res.status(400).json({ erro: "Informe nome, email e senha" });
        return;
    }
    const erros = (0, utils_1.validaSenha)(senha);
    if (erros.length > 0) {
        res.status(400).json({ erro: erros.join("; ") });
        return;
    }
    const clienteEmail = yield prisma.usuario.findMany({
        where: { email: email, deleted: false }
    });
    if (clienteEmail.length > 0) {
        res.status(400).json({ erro: "ERRO" });
        return;
    }
    // para o campo senha, atribui o hash gerado
    try {
        const transaction = yield prisma.$transaction((prisma) => __awaiter(void 0, void 0, void 0, function* () {
            const cliente = yield prisma.usuario.create({
                data: { nome: nome,
                    email: email,
                    senha: senha,
                    deleted: false
                }
            });
            res.status(201).json(cliente);
        }));
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
        const usuario = yield prisma.usuario.update({ where: { id: String(id) }, data });
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
        const usuario = yield prisma.usuario.update({ where: { id: String(id) }, data: { deleted: true } });
        res.json(usuario);
    }
    catch (error) {
        res.status(400).json({ error: "Erro ao atualizar usuário." });
    }
}));
// RETORNO POR ID
router.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const usuarios = yield prisma.usuario.findMany({
            where: { id: String(id) }, include: { dispositivos: true }
        });
        res.status(200).json(usuarios);
    }
    catch (error) {
        res.status(400).json(error);
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
        // se o e-mail existe, faz-se a comparação dos hashs
        if (usuario.senha == senha) {
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
router.post('/vincula_dispositivo', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { numero_dispositivo, id_usuario } = req.body;
    if (!numero_dispositivo || !id_usuario) {
        res.status(400).json({ erro: "Informe todos os dados" });
        return;
    }
    const dispositivos = yield prisma.dispositivo.findMany({
        where: { numero_de_serie: numero_dispositivo }
    });
    const usuarios = yield prisma.usuario.findMany({
        where: { id: id_usuario }
    });
    const usuario_dispositivos = yield prisma.dispositivo.findMany({
        where: {
            usuarioId: {
                not: null, // retorna se houver um usuario vinculado
            },
        },
        // include: {
        //   usuario: true, // retorna todos os dados do usuário 
        // },
    });
    if (dispositivos.length <= 0) {
        res.status(400).json({ erro: "Dispositivo não encontrado" });
        return;
    }
    if (usuarios.length <= 0) {
        res.status(400).json({ erro: "Usuario não encontrado" });
        return;
    }
    if (usuario_dispositivos.length > 0) {
        res.status(400).json({ erro: "Dispositivo já cadastradado" });
        return;
    }
    try {
        const transaction = yield prisma.$transaction((prisma) => __awaiter(void 0, void 0, void 0, function* () {
            const vincular = yield prisma.dispositivo.update({ where: { id: String(dispositivos[0].id) }, data: { usuarioId: id_usuario, activade: true } });
            res.status(201).json(vincular);
        }));
    }
    catch (error) {
        res.status(400).json(error);
    }
}));
exports.default = router;
//# sourceMappingURL=usuario%20copy.js.map