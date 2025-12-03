// Import PrismaClient from @prisma/client
// Our build script copies the generated client to node_modules/.prisma/client
// which ensures the correct binaries are available for the runtime environment
export { PrismaClient } from "@prisma/client";
export type { Prisma } from "@prisma/client";

// Re-export types from generated folder (type-only, no runtime code)
export type { Dispositivo, AlertaGravidade } from "../../generated/prisma";

