import { doesItemContainSign } from "~/utils";

export function getStepsDataFromForm(data) {
  const { stepsAmount } = data;
  const stepsData = [];

  for (let i = 0; i <= stepsAmount; i++) {
    const stepType = data[`type${i}`];
    let answer: string | string[] = data[`answer${i}`] as string;

    const returnData = {
      stepType,
      number: index,
      languageId: activeLanguage.id,
      parentLessonId: skillLessonIDs[index],
      // options: {}
    };
    switch (stepType) {
      case "Question": {
        const question = data[`question${i}`];
        const keywords = data[`keywords${i}`] as string;
        answer = answer.trim().split(" ");
        return stepsData.push({
          ...returnData,
          // question,
          answer,
          // keywords: keywords ? keywords.split(",") : [],
          options: JSON.stringify({
            keywords: keywords ? keywords.split(",") : [],
            question,
          }),
        });
      }
      case "Insert": {
        const text = data[`text${i}`] as string;
        const isToChoose = !!data[`isToChoose${i}`];
        const variantValues = form.getAll(`variant${i}`);
        answer = answer
          .trim()
          .split(",")
          .sort((a, b) => Number(a) - Number(b));
        const variants = variantValues.map((value, idx) => ({
          idx,
          value: doesItemContainSign(value as string).newItem,
          isFocused: false,
        }));
        return stepsData.push({
          ...returnData,
          answer,
          // text: text.trim(),
          // isToChoose: variants.length === 0 ? isToChoose : false,
          // variants,
          options: JSON.stringify({
            text: text.trim(),
            isToChoose: variants.length === 0 ? isToChoose : false,
            variants,
          }),
        });
      }
      case "Variants": {
        const question = data[`question${i}`];
        const variants = form.getAll(`variant${i}`);
        return stepsData.push({
          ...returnData,
          answer,
          // question,
          // variants: variants.map((variant, idx) => ({
          //   value: variant,
          //   idx: idx + 1,
          //   isFocused: false,
          // })),
          options: JSON.stringify({
            question,
            variants: variants.map((variant, idx) => ({
              value: variant,
              idx: idx + 1,
              isFocused: false,
            })),
          }),
        });
      }
      case "Pairs": {
        const variants = form.getAll(`variant${i}`) as string[];
        stepsData.push({
          ...returnData,
          answer: answer.split(","),
          // variants: variants.map((variant, idx) => ({
          //   value: variant,
          //   isFocused: false,
          //   isConnected: true,
          //   idx: idx + 1,
          // })),
          options: JSON.stringify({
            variants: variants.map((variant, idx) => ({
              value: variant,
              isFocused: false,
              isConnected: true,
              idx: idx + 1,
            })),
          }),
        });
      }
      default: {
        return { ...returnData, answer };
      }
    }
  }

  return stepsData;
}
