import "dotenv/config";
import path from "path";
import { PrismaMariaDb } from "@prisma/adapter-mariadb";
export type { Prisma, Dispositivo, AlertaGravidade } from "../../generated/prisma";

const generatedClientPath = path.join(process.cwd(), "generated", "prisma");
const { PrismaClient: GeneratedPrismaClient } = require(generatedClientPath) as {
	PrismaClient: typeof import("../../generated/prisma").PrismaClient;
};

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
	throw new Error("DATABASE_URL is not defined");
}

const url = new URL(connectionString);
const adapter = new PrismaMariaDb({
	host: url.hostname,
	port: Number(url.port) || 3306,
	user: url.username,
	password: url.password,
	database: url.pathname.slice(1),
	allowPublicKeyRetrieval: true,
	ssl: { rejectUnauthorized: false },
});

export class PrismaClient extends GeneratedPrismaClient {
	constructor() {
		super({ adapter });
	}
}

