const { exec } = require("child_process");
const path = require("path");
const fs = require("fs");

// binaryTargets in schema.prisma already includes "native" and "rhel-openssl-3.0.x",
// so a single `prisma generate` produces all needed binaries on any OS.
console.log("Generating Prisma Client for all targets...");
exec(
  `npx prisma generate`,
  { cwd: path.join(__dirname, "..") },
  (error, stdout, stderr) => {
    if (error) {
      console.error("Generation error:", error);
      process.exit(1);
    }
    console.log("Generation complete");
    console.log(stdout);

    // Copy generated Prisma client to node_modules for runtime availability
    console.log("\nCopying generated client to node_modules/.prisma/client...");
    try {
      const srcDir = path.join(__dirname, "..", "generated", "prisma");
      const destDir = path.join(__dirname, "..", "node_modules", ".prisma", "client");

      const copyDir = (src, dest) => {
        fs.mkdirSync(dest, { recursive: true });
        fs.readdirSync(src).forEach((file) => {
          const srcPath = path.join(src, file);
          const destPath = path.join(dest, file);
          if (fs.statSync(srcPath).isDirectory()) {
            copyDir(srcPath, destPath);
          } else {
            fs.copyFileSync(srcPath, destPath);
          }
        });
      };

      copyDir(srcDir, destDir);
      console.log("Successfully copied to node_modules/.prisma/client");
      process.exit(0);
    } catch (copyError) {
      console.error("Copy error:", copyError);
      process.exit(1);
    }
  }
);
