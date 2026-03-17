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

const adapter = new PrismaMariaDb(connectionString);

export class PrismaClient extends GeneratedPrismaClient {
	constructor() {
		super({ adapter });
	}
}

