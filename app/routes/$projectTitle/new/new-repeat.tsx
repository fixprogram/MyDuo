import { ActionFunction, redirect } from "remix";
import Constructor from "~/modules/Constructor";
import { db } from "~/utils/db.server";
import { getActiveProject } from "~/utils/session.server";

export const action: ActionFunction = async ({ request, params }) => {
  const activeProject = await getActiveProject(request);
  const form = await request.formData();
  const title = form.get("title"); // Getting the repeat title

  const steps = form.getAll("step").map((item, index) => {
    const type = form.get(`type${index}`); // Getting type of the step
    let answer: any = form.get(`answer${index}`); // Getting answer
    answer = answer.toLowerCase();
    const returnData = { type, number: index };
    switch (type) {
      case "Question": {
        const question = form.get(`question${index}`); // Getting question if it's Question type
        const keywords: any = form.get(`keywords${index}`); // Getting keywords if it's Question type
        return {
          ...returnData,
          question,
          answer,
          keywords: keywords ? keywords.split(",") : [],
        };
      }
      case "Insert": {
        const text = form.get(`text${index}`); // Getting text if it's Insert type
        return {
          ...returnData,
          answer: answer.indexOf(",") ? answer.split(",") : answer,
          text,
        };
      }
      case "Variants": {
        const question = form.get(`question${index}`); // Getting question if it's Question type
        const definition = form.get(`definition${index}`); //
        const variants = form.getAll(`variant${index}`); //
        return { ...returnData, answer, definition, question, variants };
      }
      case "Pairs": {
        const variants = form.getAll(`variant${index}`); //
        return { ...returnData, answer: answer.split(","), variants };
      }
      default: {
        return { ...returnData, answer };
      }
    }
  });

  const data: any = { title, steps, exp: 0, projectId: activeProject?.id };
  const repeat = await db.repeat.create({ data });
  return redirect(`/repeat/${repeat.id}`);
};

export default function NewRepeat() {
  return <Constructor />;
}