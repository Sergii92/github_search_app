export const setSerchItemsHelper = (array, value) => {
  let result = [];

  result = [...array, value];
  if (result.length > 5) {
    result.shift();
  }

  return result;
};
