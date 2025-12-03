"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaClient = void 0;
// Re-export PrismaClient from @prisma/client (installed in node_modules)
// This ensures the client uses the correct binary for the runtime environment
var client_1 = require("@prisma/client");
Object.defineProperty(exports, "PrismaClient", { enumerable: true, get: function () { return client_1.PrismaClient; } });
