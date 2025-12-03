
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  getRuntime
} = require('./runtime/wasm.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.17.0
 * Query Engine version: 393aa359c9ad4a4bb28630fb5613f9c281cde053
 */
Prisma.prismaVersion = {
  client: "5.17.0",
  engine: "393aa359c9ad4a4bb28630fb5613f9c281cde053"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UsuarioScalarFieldEnum = {
  id: 'id',
  nome: 'nome',
  email: 'email',
  cpf: 'cpf',
  senha: 'senha',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  deleted: 'deleted'
};

exports.Prisma.TokensScalarFieldEnum = {
  id: 'id',
  codigo: 'codigo',
  createdAt: 'createdAt',
  email: 'email',
  deleted: 'deleted'
};

exports.Prisma.DispositivoScalarFieldEnum = {
  id: 'id',
  nome: 'nome',
  modelo: 'modelo',
  numero_de_serie: 'numero_de_serie',
  activade: 'activade',
  data_fabricacao: 'data_fabricacao',
  usuarioId: 'usuarioId',
  bateria: 'bateria',
  status: 'status'
};

exports.Prisma.Dispositivo_configScalarFieldEnum = {
  id: 'id',
  intervalo_envio: 'intervalo_envio',
  monitoramentoLigado: 'monitoramentoLigado',
  dispositivoId: 'dispositivoId',
  modo_eco: 'modo_eco',
  alerta_sem_sinal: 'alerta_sem_sinal',
  alerta_bateria: 'alerta_bateria',
  alerta_bateria_valor: 'alerta_bateria_valor'
};

exports.Prisma.AlertaScalarFieldEnum = {
  id: 'id',
  descricao: 'descricao',
  gravidede: 'gravidede',
  ativo: 'ativo',
  dispositivoId: 'dispositivoId',
  alertaId: 'alertaId',
  createdAt: 'createdAt'
};

exports.Prisma.Alerta_tipoScalarFieldEnum = {
  id: 'id',
  nome: 'nome',
  regra: 'regra',
  valor: 'valor'
};

exports.Prisma.LocalizacaoScalarFieldEnum = {
  id: 'id',
  longitude: 'longitude',
  latitude: 'latitude',
  data_hora: 'data_hora',
  dispositivoId: 'dispositivoId'
};

exports.Prisma.Dispositivo_logScalarFieldEnum = {
  id: 'id',
  data_hora: 'data_hora',
  status_bateria: 'status_bateria',
  descricao: 'descricao',
  banda_dados: 'banda_dados',
  dispositivoId: 'dispositivoId'
};

exports.Prisma.Usuario_logScalarFieldEnum = {
  id: 'id',
  descricao: 'descricao',
  data_hora: 'data_hora',
  usuarioId: 'usuarioId'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};
exports.DispositivoStatus = exports.$Enums.DispositivoStatus = {
  Em_movimento: 'Em_movimento',
  Parado: 'Parado',
  Ligado: 'Ligado',
  Desligado: 'Desligado',
  Standby: 'Standby'
};

exports.AlertaGravidade = exports.$Enums.AlertaGravidade = {
  Alerta_vermelho: 'Alerta_vermelho',
  Aviso_amarelo: 'Aviso_amarelo'
};

exports.Prisma.ModelName = {
  Usuario: 'Usuario',
  Tokens: 'Tokens',
  Dispositivo: 'Dispositivo',
  Dispositivo_config: 'Dispositivo_config',
  Alerta: 'Alerta',
  Alerta_tipo: 'Alerta_tipo',
  Localizacao: 'Localizacao',
  Dispositivo_log: 'Dispositivo_log',
  Usuario_log: 'Usuario_log'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "C:\\Users\\leona\\Desktop\\api_gitlab\\api-gitHub\\generated\\prisma",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "windows",
        "native": true
      }
    ],
    "previewFeatures": [
      "driverAdapters"
    ],
    "sourceFilePath": "C:\\Users\\leona\\Desktop\\api_gitlab\\api-gitHub\\prisma\\schema.prisma",
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": null,
    "schemaEnvPath": "../../.env"
  },
  "relativePath": "../../prisma",
  "clientVersion": "5.17.0",
  "engineVersion": "393aa359c9ad4a4bb28630fb5613f9c281cde053",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "mysql",
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "// This is your Prisma schema file,\n// learn more about it in the docs: https://pris.ly/d/prisma-schema\n\n// Looking for ways to speed up your queries, or scale easily with your serverless or edge functions?\n// Try Prisma Accelerate: https://pris.ly/cli/accelerate-init\n\ngenerator client {\n  provider        = \"prisma-client-js\"\n  output          = \"../generated/prisma\"\n  previewFeatures = [\"driverAdapters\"]\n}\n\ndatasource db {\n  provider = \"mysql\"\n  url      = env(\"DATABASE_URL\")\n}\n\nmodel Usuario {\n  id           String        @id @default(uuid()) @db.VarChar(60)\n  nome         String        @db.VarChar(45)\n  email        String        @unique @db.VarChar(45)\n  cpf          String        @unique @db.VarChar(11)\n  senha        String        @db.VarChar(60)\n  createdAt    DateTime      @default(now())\n  updatedAt    DateTime      @updatedAt\n  deleted      Boolean       @default(false)\n  dispositivos Dispositivo[]\n  log          Usuario_log[]\n\n  @@map(\"usuarios\")\n}\n\nmodel Tokens {\n  id        Int      @id @default(autoincrement())\n  codigo    String   @db.VarChar(6)\n  createdAt DateTime @default(now())\n  email     String   @db.VarChar(20)\n  deleted   Boolean  @default(false)\n}\n\nmodel Dispositivo {\n  id              String               @id @default(uuid()) @db.VarChar(60)\n  nome            String               @default(\"no_user\") @db.VarChar(20)\n  modelo          String               @db.VarChar(45)\n  numero_de_serie String               @db.VarChar(45)\n  activade        Boolean              @default(false)\n  data_fabricacao DateTime\n  usuario         Usuario?             @relation(fields: [usuarioId], references: [id])\n  usuarioId       String?\n  bateria         Int                  @default(0)\n  status          DispositivoStatus    @default(Desligado)\n  config          Dispositivo_config[]\n  alertas         Alerta[]\n  localizacoes    Localizacao[]\n  logs            Dispositivo_log[]\n\n  @@map(\"dispositivos\")\n}\n\nmodel Dispositivo_config {\n  id                  Int         @id @default(autoincrement())\n  intervalo_envio     Int\n  monitoramentoLigado Boolean     @default(true)\n  dispositivo         Dispositivo @relation(fields: [dispositivoId], references: [id])\n  dispositivoId       String\n\n  modo_eco             Boolean @default(false)\n  alerta_sem_sinal     Boolean @default(false)\n  alerta_bateria       Boolean @default(false)\n  alerta_bateria_valor Int     @default(15)\n\n  @@map(\"dispositivo_config\")\n}\n\nmodel Alerta {\n  id            Int             @id @default(autoincrement())\n  descricao     String          @db.VarChar(45)\n  gravidede     AlertaGravidade @default(Aviso_amarelo)\n  ativo         Boolean\n  dispositivo   Dispositivo     @relation(fields: [dispositivoId], references: [id], onDelete: Cascade)\n  dispositivoId String\n  alertaTipo    Alerta_tipo     @relation(fields: [alertaId], references: [id], onDelete: Cascade)\n  alertaId      Int\n  createdAt     DateTime        @default(now())\n\n  @@map(\"alertas\")\n}\n\nmodel Alerta_tipo {\n  id     Int      @id @default(autoincrement())\n  nome   String   @db.VarChar(45)\n  regra  String   @db.VarChar(45)\n  valor  String   @default(\"\") @db.VarChar(70)\n  alerta Alerta[]\n\n  @@map(\"alertas_tipo\")\n}\n\nmodel Localizacao {\n  id            Int         @id @default(autoincrement())\n  longitude     Decimal\n  latitude      Decimal\n  data_hora     DateTime\n  dispositivo   Dispositivo @relation(fields: [dispositivoId], references: [id])\n  dispositivoId String\n\n  @@map(\"localizacoes\")\n}\n\nmodel Dispositivo_log {\n  id             Int         @id @default(autoincrement())\n  data_hora      DateTime\n  status_bateria Int\n  descricao      String?     @db.VarChar(45)\n  banda_dados    String      @db.VarChar(45)\n  dispositivo    Dispositivo @relation(fields: [dispositivoId], references: [id])\n  dispositivoId  String\n\n  @@map(\"dispositivo_log\")\n}\n\nmodel Usuario_log {\n  id        Int      @id @default(autoincrement())\n  descricao String   @db.VarChar(45)\n  data_hora DateTime\n  usuario   Usuario  @relation(fields: [usuarioId], references: [id])\n  usuarioId String\n\n  @@map(\"usuario_log\")\n}\n\nenum AlertaGravidade {\n  Alerta_vermelho\n  Aviso_amarelo\n}\n\nenum DispositivoStatus {\n  Em_movimento\n  Parado\n  Ligado\n  Desligado\n  Standby\n}\n",
  "inlineSchemaHash": "1dcf35e71476d38594f064798365f3a98454ee8f26737ce259142e8c2995d1ea",
  "copyEngine": true
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse("{\"models\":{\"Usuario\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"nome\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"email\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"cpf\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"senha\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"deleted\",\"kind\":\"scalar\",\"type\":\"Boolean\"},{\"name\":\"dispositivos\",\"kind\":\"object\",\"type\":\"Dispositivo\",\"relationName\":\"DispositivoToUsuario\"},{\"name\":\"log\",\"kind\":\"object\",\"type\":\"Usuario_log\",\"relationName\":\"UsuarioToUsuario_log\"}],\"dbName\":\"usuarios\"},\"Tokens\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"codigo\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"email\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"deleted\",\"kind\":\"scalar\",\"type\":\"Boolean\"}],\"dbName\":null},\"Dispositivo\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"nome\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"modelo\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"numero_de_serie\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"activade\",\"kind\":\"scalar\",\"type\":\"Boolean\"},{\"name\":\"data_fabricacao\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"usuario\",\"kind\":\"object\",\"type\":\"Usuario\",\"relationName\":\"DispositivoToUsuario\"},{\"name\":\"usuarioId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"bateria\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"status\",\"kind\":\"enum\",\"type\":\"DispositivoStatus\"},{\"name\":\"config\",\"kind\":\"object\",\"type\":\"Dispositivo_config\",\"relationName\":\"DispositivoToDispositivo_config\"},{\"name\":\"alertas\",\"kind\":\"object\",\"type\":\"Alerta\",\"relationName\":\"AlertaToDispositivo\"},{\"name\":\"localizacoes\",\"kind\":\"object\",\"type\":\"Localizacao\",\"relationName\":\"DispositivoToLocalizacao\"},{\"name\":\"logs\",\"kind\":\"object\",\"type\":\"Dispositivo_log\",\"relationName\":\"DispositivoToDispositivo_log\"}],\"dbName\":\"dispositivos\"},\"Dispositivo_config\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"intervalo_envio\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"monitoramentoLigado\",\"kind\":\"scalar\",\"type\":\"Boolean\"},{\"name\":\"dispositivo\",\"kind\":\"object\",\"type\":\"Dispositivo\",\"relationName\":\"DispositivoToDispositivo_config\"},{\"name\":\"dispositivoId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"modo_eco\",\"kind\":\"scalar\",\"type\":\"Boolean\"},{\"name\":\"alerta_sem_sinal\",\"kind\":\"scalar\",\"type\":\"Boolean\"},{\"name\":\"alerta_bateria\",\"kind\":\"scalar\",\"type\":\"Boolean\"},{\"name\":\"alerta_bateria_valor\",\"kind\":\"scalar\",\"type\":\"Int\"}],\"dbName\":\"dispositivo_config\"},\"Alerta\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"descricao\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"gravidede\",\"kind\":\"enum\",\"type\":\"AlertaGravidade\"},{\"name\":\"ativo\",\"kind\":\"scalar\",\"type\":\"Boolean\"},{\"name\":\"dispositivo\",\"kind\":\"object\",\"type\":\"Dispositivo\",\"relationName\":\"AlertaToDispositivo\"},{\"name\":\"dispositivoId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"alertaTipo\",\"kind\":\"object\",\"type\":\"Alerta_tipo\",\"relationName\":\"AlertaToAlerta_tipo\"},{\"name\":\"alertaId\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"}],\"dbName\":\"alertas\"},\"Alerta_tipo\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"nome\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"regra\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"valor\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"alerta\",\"kind\":\"object\",\"type\":\"Alerta\",\"relationName\":\"AlertaToAlerta_tipo\"}],\"dbName\":\"alertas_tipo\"},\"Localizacao\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"longitude\",\"kind\":\"scalar\",\"type\":\"Decimal\"},{\"name\":\"latitude\",\"kind\":\"scalar\",\"type\":\"Decimal\"},{\"name\":\"data_hora\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"dispositivo\",\"kind\":\"object\",\"type\":\"Dispositivo\",\"relationName\":\"DispositivoToLocalizacao\"},{\"name\":\"dispositivoId\",\"kind\":\"scalar\",\"type\":\"String\"}],\"dbName\":\"localizacoes\"},\"Dispositivo_log\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"data_hora\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"status_bateria\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"descricao\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"banda_dados\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"dispositivo\",\"kind\":\"object\",\"type\":\"Dispositivo\",\"relationName\":\"DispositivoToDispositivo_log\"},{\"name\":\"dispositivoId\",\"kind\":\"scalar\",\"type\":\"String\"}],\"dbName\":\"dispositivo_log\"},\"Usuario_log\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"descricao\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"data_hora\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"usuario\",\"kind\":\"object\",\"type\":\"Usuario\",\"relationName\":\"UsuarioToUsuario_log\"},{\"name\":\"usuarioId\",\"kind\":\"scalar\",\"type\":\"String\"}],\"dbName\":\"usuario_log\"}},\"enums\":{},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.engineWasm = {
  getRuntime: () => require('./query_engine_bg.js'),
  getQueryEngineWasmModule: async () => {
    const loader = (await import('#wasm-engine-loader')).default
    const engine = (await loader).default
    return engine 
  }
}

config.injectableEdgeEnv = () => ({
  parsed: {
    DATABASE_URL: typeof globalThis !== 'undefined' && globalThis['DATABASE_URL'] || typeof process !== 'undefined' && process.env && process.env.DATABASE_URL || undefined
  }
})

if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

