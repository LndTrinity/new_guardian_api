// Re-export PrismaClient from @prisma/client (installed in node_modules)
// This ensures the client uses the correct binary for the runtime environment
export { PrismaClient } from "@prisma/client";
export type { Prisma } from "@prisma/client";

// Re-export custom types from generated (only types, not runtime code)
export type { Dispositivo, AlertaGravidade } from "../../generated/prisma";
