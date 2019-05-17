export const swap = (arr, i, j) => {
  arr.splice(i, 1, arr.splice(j, 1, arr[i])[0]);
  return arr;
};
