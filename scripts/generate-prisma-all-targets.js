const { exec } = require("child_process");
const path = require("path");

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
        process.exit(0);
      }
    );
  }
);
