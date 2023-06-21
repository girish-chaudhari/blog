// const { PrismaClient } = require('@prisma/client');
import { PrismaClient } from "@prisma/client";
// const { hash } = require('bcryptjs');

const prisma = new PrismaClient({ log: ['query', 'info'] });

async function main() {
  // const password = await hash("password123", 12);
  const user = await prisma.user.create({
    data: {
      email: "admin@admin.com",
      name: "Admin",
      password:'password123',
    },
  });
  console.log({ user });
}
main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });