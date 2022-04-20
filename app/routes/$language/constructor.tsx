import styles from "~/styles/index.css";
import { ActionFunction, redirect } from "remix";
import Constructor from "~/modules/Constructor";
import { prisma } from "~/db.server";
import { getActiveLanguage } from "~/models/language.server";

export function ErrorBoundary() {
  return (
    <div className="error-container">
      Something unexpected went wrong. Sorry about that.
    </div>
  );
}

export const links = () => {
  return [{ rel: "stylesheet", href: styles }];
};

export const action: ActionFunction = async ({ request, params }) => {
  const activeProject = await getActiveLanguage(request);
  const form = await request.formData();
  const title = form.get("title");

  const steps = form.getAll("step").map((item, index) => {
    const type = form.get(`type${index}`);
    let answer: any = form.get(`answer${index}`);
    answer = answer.trim().toLowerCase().split(" ");
    const returnData = { type, number: index };
    switch (type) {
      case "Question": {
        const question = form.get(`question${index}`);
        const keywords: any = form.get(`keywords${index}`);
        return {
          ...returnData,
          question,
          answer,
          keywords: keywords ? keywords.split(",") : [],
        };
      }
      case "Insert": {
        const text = form.get(`text${index}`);
        return {
          ...returnData,
          answer,
          text,
        };
      }
      case "Variants": {
        const question = form.get(`question${index}`);
        const variants = form.getAll(`variant${index}`);
        return { ...returnData, answer, question, variants };
      }
      case "Pairs": {
        const variants = form.getAll(`variant${index}`);
        return { ...returnData, answer: answer[0].split(","), variants };
      }
      default: {
        return { ...returnData, answer };
      }
    }
  });

  const data: any = { title, steps, exp: 0, projectId: activeProject?.id };
  const lesson = await prisma.lesson.create({ data });
  return redirect(`/lesson/${lesson.id}`);
};

export default function NewLesson() {
  return <Constructor />;
}
