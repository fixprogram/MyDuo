import { prisma } from "~/db.server";
import { getActiveLanguage } from "~/models/language.server";
import Constructor from "~/modules/Constructor";
import { Language, Skill, Step } from "@prisma/client";
import { createSteps } from "~/models/lesson.server";
import {
  checkTitleUnique,
  getLastAddedSkills,
  getLastAddedSkill,
} from "~/models/skill.server";
import { doesItemContainSign, getTodayDate } from "~/utils";
import { json, redirect } from "@remix-run/node";
import type { ActionArgs, LoaderArgs } from "@remix-run/node";
import { useActionData, useLoaderData } from "@remix-run/react";

export type ActionData = {
  errors?: {
    title?: string;
  };
};

export function ErrorBoundary() {
  return (
    <div className="error-container">{`There was an error loading the constructor. Sorry.`}</div>
  );
}

export const action = async ({ request, params }: ActionArgs) => {
  const activeLanguage = (await getActiveLanguage(request)) as Language;
  const form = await request.formData();

  const { ...values } = Object.fromEntries(form);

  const stepsData = JSON.parse(values.steps as string) as Step[];
  const skillData = JSON.parse(values.skillData as string);
  console.log("steps data: ", stepsData);
  console.log("Skill data: ", skillData);

  const { skillTitle, skillLineNumber } = skillData;
  // const title = form.get("title") as string;

  let lineNumber = skillLineNumber;
  // let lineNumber = form.get("lineNumber") as string;
  const lastAddedSkill = await getLastAddedSkill(activeLanguage.id);
  if (lastAddedSkill) {
    lineNumber =
      lineNumber === "0"
        ? (lastAddedSkill?.lineNumber + 1).toString()
        : lineNumber;
  }

  // const skillLessonIDs = form.getAll("parentLessonId") as string[];

  const isTitleUnique = await checkTitleUnique(activeLanguage.id, skillTitle);

  if (isTitleUnique) {
    return json<ActionData>(
      {
        errors: { title: "Title isn't unique" },
      },
      { status: 400 }
    );
  }

  // const steps = form.getAll("step").map((item, index) => {
  //   const stepType = form.get(`type${index}`);
  //   let answer: string | string[] = form.get(`answer${index}`) as string;
  //   const returnData = {
  //     stepType,
  //     number: index,
  //     languageId: activeLanguage.id,
  //     parentLessonId: skillLessonIDs[index],
  //     // options: {}
  //   };
  //   switch (stepType) {
  //     case "Question": {
  //       const question = form.get(`question${index}`);
  //       const keywords = form.get(`keywords${index}`) as string;
  //       answer = answer.trim().split(" ");
  //       return {
  //         ...returnData,
  //         // question,
  //         answer,
  //         // keywords: keywords ? keywords.split(",") : [],
  //         options: JSON.stringify({
  //           keywords: keywords ? keywords.split(",") : [],
  //           question,
  //         }),
  //       };
  //     }
  //     case "Insert": {
  //       const text = form.get(`text${index}`) as string;
  //       const isToChoose = !!form.get(`isToChoose${index}`);
  //       const variantValues = form.getAll(`variant${index}`);
  //       answer = answer
  //         .trim()
  //         .split(",")
  //         .sort((a, b) => Number(a) - Number(b));
  //       const variants = variantValues.map((value, idx) => ({
  //         idx,
  //         value: doesItemContainSign(value as string).newItem,
  //         isFocused: false,
  //       }));
  //       return {
  //         ...returnData,
  //         answer,
  //         // text: text.trim(),
  //         // isToChoose: variants.length === 0 ? isToChoose : false,
  //         // variants,
  //         options: JSON.stringify({
  //           text: text.trim(),
  //           isToChoose: variants.length === 0 ? isToChoose : false,
  //           variants,
  //         }),
  //       };
  //     }
  //     case "Variants": {
  //       const question = form.get(`question${index}`);
  //       const variants = form.getAll(`variant${index}`);
  //       return {
  //         ...returnData,
  //         answer,
  //         // question,
  //         // variants: variants.map((variant, idx) => ({
  //         //   value: variant,
  //         //   idx: idx + 1,
  //         //   isFocused: false,
  //         // })),
  //         options: JSON.stringify({
  //           question,
  //           variants: variants.map((variant, idx) => ({
  //             value: variant,
  //             idx: idx + 1,
  //             isFocused: false,
  //           })),
  //         }),
  //       };
  //     }
  //     case "Pairs": {
  //       const variants = form.getAll(`variant${index}`) as string[];
  //       return {
  //         ...returnData,
  //         answer: answer.split(","),
  //         // variants: variants.map((variant, idx) => ({
  //         //   value: variant,
  //         //   isFocused: false,
  //         //   isConnected: true,
  //         //   idx: idx + 1,
  //         // })),
  //         options: JSON.stringify({
  //           variants: variants.map((variant, idx) => ({
  //             value: variant,
  //             isFocused: false,
  //             isConnected: true,
  //             idx: idx + 1,
  //           })),
  //         }),
  //       };
  //     }
  //     default: {
  //       return { ...returnData, answer };
  //     }
  //   }
  // });

  // const steps = [];

  const createdStepIDs = await createSteps(stepsData);
  const data = {
    title: skillTitle,
    stepIDs: createdStepIDs,
    // lessonsAmount: stepsData.le,
    // lessonsAmount: Number(skillLessonIDs[skillLessonIDs.length - 1]),
    currentLesson: 0,
    level: 0,
    languageId: activeLanguage?.id,
    updatedAt: getTodayDate(),
    lineNumber: Number(lineNumber),
  };
  const skill = await prisma.skill.create({ data });
  return redirect(`/skill/${skill.title}/1`);
};

export const loader = async ({ request }: LoaderArgs) => {
  const activeLanguage = (await getActiveLanguage(request)) as Language;
  const lastAddedSkills = await getLastAddedSkills(activeLanguage.id);

  return json({ lastAddedSkills });
};

export default function New() {
  const actionData = useActionData<typeof action>();
  const { lastAddedSkills } = useLoaderData<typeof loader>();

  return (
    <Constructor actionData={{}} />
    // <Constructor actionData={actionData} lastAddedSkills={lastAddedSkills} />
  );
}
