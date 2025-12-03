// Import PrismaClient from the locally generated folder
// This ensures the correct binary is used for each environment (Windows local, Linux Vercel)
export { PrismaClient } from "../../generated/prisma";
export type { Prisma } from "../../generated/prisma";

// Re-export types
export type { Dispositivo, AlertaGravidade } from "../../generated/prisma";

