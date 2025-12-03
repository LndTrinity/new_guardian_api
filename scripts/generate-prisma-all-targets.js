const { exec } = require("child_process");
const { execSync } = require("child_process");
const path = require("path");
const fs = require("fs");

// Generate for current platform (native)
console.log("Generating Prisma Client for native target...");
exec(
  `npx prisma generate`,
  { cwd: path.join(__dirname, "..") },
  (error, stdout, stderr) => {
    if (error) {
      console.error("Native generation error:", error);
      process.exit(1);
    }
    console.log("Native generation complete");
    console.log(stdout);

    // Generate for Linux
    console.log("\nGenerating Prisma Client for rhel-openssl-3.0.x target...");
    exec(
      `PRISMA_CLI_BINARY_TARGETS=rhel-openssl-3.0.x npx prisma generate`,
      { cwd: path.join(__dirname, "..") },
      (error, stdout, stderr) => {
        if (error) {
          console.error("Linux generation error:", error);
          process.exit(1);
        }
        console.log("Linux generation complete");
        console.log(stdout);
        
        // Copy generated Prisma client to node_modules for runtime availability
        console.log("\nCopying generated client to node_modules/.prisma/client...");
        try {
          const srcDir = path.join(__dirname, "..", "generated", "prisma");
          const destDir = path.join(__dirname, "..", "node_modules", ".prisma", "client");
          
          // Create destination directory if it doesn't exist
          fs.mkdirSync(destDir, { recursive: true });
          
          // Copy all files from generated/prisma to node_modules/.prisma/client
          const files = fs.readdirSync(srcDir);
          files.forEach(file => {
            const srcFile = path.join(srcDir, file);
            const destFile = path.join(destDir, file);
            
            const stat = fs.statSync(srcFile);
            if (stat.isDirectory()) {
              // Recursively copy directories using platform-independent approach
              const copyDir = (src, dest) => {
                fs.mkdirSync(dest, { recursive: true });
                fs.readdirSync(src).forEach(file => {
                  const srcPath = path.join(src, file);
                  const destPath = path.join(dest, file);
                  const stat = fs.statSync(srcPath);
                  if (stat.isDirectory()) {
                    copyDir(srcPath, destPath);
                  } else {
                    fs.copyFileSync(srcPath, destPath);
                  }
                });
              };
              copyDir(srcFile, destFile);
            } else {
              // Copy files
              fs.copyFileSync(srcFile, destFile);
            }
          });
          
          console.log("Successfully copied to node_modules/.prisma/client");
          process.exit(0);
        } catch (copyError) {
          console.error("Copy error:", copyError);
          process.exit(1);
        }
      }
    );
  }
);
