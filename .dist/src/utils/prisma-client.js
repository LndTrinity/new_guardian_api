"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaClient = void 0;
require("dotenv/config");
const path_1 = __importDefault(require("path"));
const adapter_mariadb_1 = require("@prisma/adapter-mariadb");
const generatedClientPath = path_1.default.join(process.cwd(), "generated", "prisma");
const { PrismaClient: GeneratedPrismaClient } = require(generatedClientPath);
const connectionString = process.env.DATABASE_URL;
if (!connectionString) {
    throw new Error("DATABASE_URL is not defined");
}
const adapter = new adapter_mariadb_1.PrismaMariaDb(connectionString);
class PrismaClient extends GeneratedPrismaClient {
    constructor() {
        super({ adapter });
    }
}
exports.PrismaClient = PrismaClient;
