import prisma from "../lib/prisma";


const userData = [
  { name: "Sokha Mean", email: "sokha.mean@example.com" },
  { name: "Dara Chan", email: "dara.chan@example.com" },
  { name: "Bopha Roth", email: "bopha.roth@example.com" },
  { name: "Vicheka Sam", email: "vicheka.sam@example.com" },
];

async function addUser() {
  for (const u of userData) {
    await prisma.users.create({ data: u });
  }
};

addUser()
