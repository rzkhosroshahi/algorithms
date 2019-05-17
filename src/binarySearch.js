import { bubbleSort } from "./bubble";

const divideArray = arr => {
  const divideLength = Math.floor(arr.length / 2);
  return [arr.slice(0, divideLength), arr.slice(divideLength, arr.length)];
};
export const binarySearch = (arr, searchItem) => {
  const sortArray = bubbleSort(arr);
  const [arr1, arr2] = divideArray(sortArray);

  if (searchItem <= arr1[arr1.length - 1]) {
    return arr.findIndex(item => item === searchItem);
  } else if (searchItem <= arr2[arr2.length - 1]) {
    return arr.findIndex(item => item === searchItem);
  } else {
    return `can't find ${searchItem}`;
  }
};
