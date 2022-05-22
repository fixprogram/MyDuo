import { Topic } from "@prisma/client";
import { prisma } from "~/db.server";

export async function updateCurrentChapter(topic: Topic) {
  const today = new Date();

  return await prisma.topic.update({
    where: {
      title: topic.title,
    },
    data: {
      currentChapter:
        topic.chapters !== topic.currentChapter
          ? topic.currentChapter + 1
          : topic.currentChapter,
      updatedAt: today.getDate().toString(),
    },
  });
}
