import express, { Request, Response } from 'express'
import cors from "cors"
import usuariosRoutes from "../src/routes/usuario"
import usuarios_logRoutes from '../src/routes/usuario_log'
import alertaRoutes from '../src/routes/alerta'
import alerta_tipoRoutes from '../src/routes/alerta_tipo'
import dispositivoRoutes from '../src/routes/dispositivo'
import dispositivo_logsRoutes from '../src/routes/dispositivo_logs'
import dispositivo_configRoutes from '../src/routes/dispositivo_config'
import localizacaoRoutes from '../src/routes/localizacao'

const app = express()

app.use(cors())
app.use(express.json())

app.use("/usuario", usuariosRoutes)
app.use("/usuario_log", usuarios_logRoutes)
app.use("/alerta", alertaRoutes)
app.use("/alerta_tipo", alerta_tipoRoutes)
app.use("/dispositivo", dispositivoRoutes)
app.use("/dispositivo_log", dispositivo_logsRoutes)
app.use("/dispositivo_config", dispositivo_configRoutes)
app.use("/localizacao", localizacaoRoutes)

// optional: rota raiz para evitar 404 ao acessar /
app.get("/", (_req: Request, res: Response) => {
  res.send("API is running")
}) // Added closing parenthesis

// Export em ESM — Vercel aceitará o app ou uma função (req,res)
export default app
export const handler = app

const PORT = process.env.PORT || 3000
const server = app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`)
})

server.on('error', (error: any) => {
  console.error('Erro no servidor:', error)
})

process.on('uncaughtException', (error: any) => {
  console.error('Exceção não capturada:', error)
})

process.on('unhandledRejection', (reason: any) => {
  console.error('Rejeição não tratada:', reason)
})
