import { takeGreatest } from "./utils/takeGreatest";
import { swap } from "./utils/swap";

export const selectionSort = arr => {
  for (let i = arr.length; i >= 0; i--) {
    const newArr = arr.slice(0, i);
    const greate = takeGreatest(newArr);
    const finIndex = arr.findIndex(item => item === greate);
    swap(arr, newArr.length - 1, finIndex);
  }
  return arr;
};
