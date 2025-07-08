import { PrismaClient } from '../generated/prisma/client.js';

const prisma = new PrismaClient();

async function seed() {
  // Seed a user
  const user = await prisma.user.create({
    data: {
      fullName: 'Jane Doe',
      username: 'janed',
      email: 'jane@doe.user',
      password_hash: '$2b$10$b1MverzRAbAvCFfd/vcXtuy4cmQ4yewKp/.LqbHhga2.eL5ULWiau', //this is the hash for 'pass123'
      Plants: {
        create: [
          {
            name: 'Zz Plant',
            note: 'My fav plant needs water once a week',
            image_url: 'https://example.com',
            water_freq: 7,
          },
        ],
      },
    },
  });

  console.log('Seeded user:', user);
}

seed()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
