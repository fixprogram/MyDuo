export const formatRef = (items: any) => {
  const blocks: any = [];
  items.forEach((item: any) => {
    if (item.name === "h1") {
      blocks.push({ question: item.value });
    } else if (item.name !== "space") {
      blocks[blocks.length - 1] = {
        ...blocks[blocks.length - 1],
        answer: item.value,
      };
    }
  });
  return blocks;
};
