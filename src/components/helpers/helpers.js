export const isEmptyObject = (object) => {
  for (let key in object) {
    return true;
  }
  return false;
};

export const isEmptyArray = (array) => {
  if (array.length) return true;
  return false;
};
