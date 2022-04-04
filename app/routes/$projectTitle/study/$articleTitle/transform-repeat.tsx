import { ActionFunction, redirect } from "remix";
import StudySidebar from "~/modules/Study/components/StudySidebar";
import { db } from "~/utils/db.server";
import { getActiveProject } from "~/utils/session.server";

export const action: ActionFunction = async ({
  request,
  params,
}: {
  request: Request;
  params: any;
}) => {
  const activeProject = await getActiveProject(request);
  const form = await request.formData();
  const title = form.get("title");

  const steps = form.getAll("step").map((item: any, index: number) => {
    const type = form.get(`type${index}`);
    let answer = form.get(`answer${index}`);
    answer?.replace("\n", "");
    answer?.replace("\r", "");
    answer = answer?.trim().toLowerCase();
    const returnData = { type, number: index };
    switch (type) {
      case "Question": {
        const question = form.get(`question${index}`);
        const keywords = form.get(`keywords${index}`);
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
          answer: answer?.indexOf(",") ? answer.split(",") : answer,
          text,
        };
      }
      case "Variants": {
        const question = form.get(`question${index}`);
        const definition = form.get(`definition${index}`);
        const variants = form.getAll(`variant${index}`);
        return { ...returnData, answer, definition, question, variants };
      }
      case "Pairs": {
        const variants = form.getAll(`variant${index}`);
        return { ...returnData, answer: answer?.split(","), variants };
      }
      default: {
        return { ...returnData, answer };
      }
    }
  });

  const repeat = await db.repeat.create({
    data: { title, steps, exp: 0, projectId: activeProject?.id },
  });
  return redirect(`/repeat/${repeat.id}`);
};

export default function TransformRepeat() {
  return <StudySidebar />;
}
