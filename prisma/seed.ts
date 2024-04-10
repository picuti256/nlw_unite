import { prisma } from "../src/lib/prisma";

async function seed() {
  await prisma.event.create({
    data: {
      id: "94b5a0fc-bbbd-4219-a8f8-849c316247c9",
      title: "NLW Unite",
      slug: "nlw-unite",
      details: "Nlw Unite Node.JS",
      maximumAttendees: 120,
    },
  });
}

seed().then(() => {
  console.log("Database seeded!");
  prisma.$disconnect();
});
