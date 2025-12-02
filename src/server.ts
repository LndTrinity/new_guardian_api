import express from 'express';
import serverless from "serverless-http";
import cors from "cors";
import usuariosRoutes from "./routes/usuario"
import usuarios_logRoutes from './routes/usuario_log'
import alertaRoutes from './routes/alerta'
import alerta_tipoRoutes from './routes/alerta_tipo'
import dispositivoRoutes from './routes/dispositivo'
import dispositivo_logsRoutes from './routes/dispositivo_logs'
import dispositivo_configRoutes from './routes/dispositivo_config'
import localizacaoRoutes from './routes/localizacao'


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

export const handler = serverless(app);