/// <reference types="node" />
async function main() {
  console.log("No seed data configured.");
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    process.exit(0);
  });
