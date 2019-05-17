import { swap } from "./utils/swap";

export const bubbleSort = arr => {
  let flag = false;

  do {
    flag = false;
    for (let i = 0; i <= arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        swap(arr, i, i + 1);
        flag = true;
      }
    }
  } while (flag);
  return arr;
};
