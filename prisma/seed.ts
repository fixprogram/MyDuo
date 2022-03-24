import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();

async function seed() {
  const kody = await db.user.create({
    data: {
      username: "kody",
      // this is a hashed version of "twixrox"
      passwordHash:
        "$2b$10$K7L1OJ45/4Y2nIvhRVpCe.FSmhDdWoXehVzJptJ/op0lSsvqNu/1u",
    },
  });
  await Promise.all(
    getRepeats().map((repeat) => {
      const data = { userId: kody.id, ...repeat };
      return db.repeat.create({ data });
    })
  );
}

seed();

function getRepeats() {
  return [
    {
      steps: [
        {
          type: "Insert",
          number: 0,
          answer: ["243r"],
          text: "23 243r fr3 3",
        },
      ],
      title: "23",
      exp: 0,
    },
  ];
}
