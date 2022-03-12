const basicVariantsState = {
  active: null,
  fade: null,
  correct: null,
  incorrect: null,
};

const basicState = {
  disabled: false,
  progress: 0,
  step: 0,
  content: [],
  variants: null,
  variantsState: basicVariantsState,
  chosenVariantNum: null,
  answer: null,
  caseItem: {},
  maxSteps: 0,
  title: "",
  description: "",
  taskTitle: "",
};

const changePrevItem = (content, chosenVariant) => {
  let prevItem = content.pop();

  if (prevItem.variants) {
    prevItem.text = chosenVariant;
  }

  return [...content, prevItem];
};

const continueContent = (content, caseItem) => {
  const newContent =
    caseItem.steps.length > 0
      ? [...content, caseItem.steps.shift(0, 1)]
      : [...content];

  return newContent;
};

const reducer = (state, action) => {
  const {
    content,
    step,
    maxSteps,
    caseItem,
    answer,
    variants,
    variantsState,
    chosenVariantNum,
  } = state;
  const { chosenVariantId } = action;
  switch (action.type) {
    case "CONTINUE":
      const newContent = continueContent(content, caseItem);

      const nextItemVariants = newContent[step]
        ? newContent[step].variants
        : null;

      const nextItemAnswer = newContent[step].answer;

      return {
        ...state,
        progress: (step + 1) / maxSteps,
        step: step + 1,
        variants: nextItemVariants,
        answer: nextItemAnswer,
        disabled: nextItemVariants ? true : false,
        content: newContent,
      };
    case "START":
      return { ...state, step: step + 1, progress: 1 / maxSteps };
    case "CHOOSE_ANSWER":
      return {
        ...state,
        disabled: false,
        chosenVariant: variants[chosenVariantId],
        variantsState: { ...variantsState, active: chosenVariantId },
        chosenVariantNum: chosenVariantId,
      };
    case "CHECK_ANSWER":
      if (variantsState.correct !== null) {
        return {
          ...state,
          disabled: false,
          variants: null,
          content: continueContent(content, caseItem),
          step: step + 1,
          variantsState: basicVariantsState,
        };
      }
      if (chosenVariantNum === answer) {
        return {
          ...state,
          content: changePrevItem(
            content,
            variants[chosenVariantNum],
            caseItem,
            false
          ),
          variantsState: { correct: chosenVariantNum },
          chosenVariantNum: null,
        };
      }
      return {
        ...state,
        disabled: true,
        variantsState: {
          ...variantsState,
          active: null,
          incorrect: chosenVariantNum,
        },
      };
    case "RESULTS":
      return {
        ...state,
        progress: step / maxSteps,
        step: step + 1,
      };
    case "FINISH":
      return {
        ...basicState,
      };
    case "SET_CASE":
      const data = action.payload;
      console.log("SET_CASE:", data);
      return {
        ...basicState,
        caseItem: data,
        maxSteps: data.steps.length,
        content: [data.steps.shift(0, 1)],
        title: data.innerTitle,
        description: data.description,
      };
    default:
      throw new Error(`We don't know this case: ${action.type}`);
  }
};

export { reducer, basicState };
