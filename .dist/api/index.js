"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const usuario_1 = __importDefault(require("../src/routes/usuario"));
const usuario_log_1 = __importDefault(require("../src/routes/usuario_log"));
const alerta_1 = __importDefault(require("../src/routes/alerta"));
const alerta_tipo_1 = __importDefault(require("../src/routes/alerta_tipo"));
const dispositivo_1 = __importDefault(require("../src/routes/dispositivo"));
const dispositivo_logs_1 = __importDefault(require("../src/routes/dispositivo_logs"));
const dispositivo_config_1 = __importDefault(require("../src/routes/dispositivo_config"));
const localizacao_1 = __importDefault(require("../src/routes/localizacao"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use("/usuario", usuario_1.default);
app.use("/usuario_log", usuario_log_1.default);
app.use("/alerta", alerta_1.default);
app.use("/alerta_tipo", alerta_tipo_1.default);
app.use("/dispositivo", dispositivo_1.default);
app.use("/dispositivo_log", dispositivo_logs_1.default);
app.use("/dispositivo_config", dispositivo_config_1.default);
app.use("/localizacao", localizacao_1.default);
// optional: rota raiz para evitar 404 ao acessar /
app.get("/", (_req, res) => {
    res.send("API is running");
}); // Added closing parenthesis
// Export em ESM — Vercel aceitará o app ou uma função (req,res)
exports.default = app;
exports.handler = app;
const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
server.on('error', (error) => {
    console.error('Erro no servidor:', error);
});
process.on('uncaughtException', (error) => {
    console.error('Exceção não capturada:', error);
});
process.on('unhandledRejection', (reason) => {
    console.error('Rejeição não tratada:', reason);
});
