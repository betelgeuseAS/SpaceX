export const isEmpty = (obj) => {
  for (var key in obj) {
    return false;
  }
  return true;
};