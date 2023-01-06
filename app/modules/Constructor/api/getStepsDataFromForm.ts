export function getStepsDataFromForm(data) {
  const steps = data.map((item, index) => {
    const stepType = form.get(`type${index}`);
    let answer: string | string[] = form.get(`answer${index}`) as string;
    const returnData = {
      stepType,
      number: index,
      languageId: activeLanguage.id,
      parentLessonId: skillLessonIDs[index],
      // options: {}
    };
    switch (stepType) {
      case "Question": {
        const question = form.get(`question${index}`);
        const keywords = form.get(`keywords${index}`) as string;
        answer = answer.trim().split(" ");
        return {
          ...returnData,
          // question,
          answer,
          // keywords: keywords ? keywords.split(",") : [],
          options: JSON.stringify({
            keywords: keywords ? keywords.split(",") : [],
            question,
          }),
        };
      }
      case "Insert": {
        const text = form.get(`text${index}`) as string;
        const isToChoose = !!form.get(`isToChoose${index}`);
        const variantValues = form.getAll(`variant${index}`);
        answer = answer
          .trim()
          .split(",")
          .sort((a, b) => Number(a) - Number(b));
        const variants = variantValues.map((value, idx) => ({
          idx,
          value: doesItemContainSign(value as string).newItem,
          isFocused: false,
        }));
        return {
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
        };
      }
      case "Variants": {
        const question = form.get(`question${index}`);
        const variants = form.getAll(`variant${index}`);
        return {
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
        };
      }
      case "Pairs": {
        const variants = form.getAll(`variant${index}`) as string[];
        return {
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
        };
      }
      default: {
        return { ...returnData, answer };
      }
    }
  });

  return steps;
}
