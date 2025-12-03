#!/usr/bin/env node
/**
 * Script para garantir que o Prisma Client seja gerado
 * Executado como parte do build na Vercel
 */
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🔄 Gerando Prisma Client...');

try {
  // Executa prisma generate
  execSync('npx prisma generate', {
    stdio: 'inherit',
    cwd: process.cwd()
  });
  
  console.log('✅ Prisma Client gerado com sucesso!');
  
  // Verifica se o arquivo foi criado
  const clientPath = path.join(process.cwd(), 'node_modules', '.prisma', 'client');
  if (fs.existsSync(clientPath)) {
    console.log(`✅ Client em: ${clientPath}`);
  } else {
    console.warn(`⚠️ Aviso: Cliente não encontrado em ${clientPath}`);
  }
} catch (error) {
  console.error('❌ Erro ao gerar Prisma Client:', error.message);
  process.exit(1);
}
