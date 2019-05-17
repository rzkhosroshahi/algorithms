import { reverse2dArray } from "./utils/array2dutils";

export const matrix2d = (mat1, mat2) => {
  const newMat2 = reverse2dArray(mat2);
  const arr = [];

  mat1.forEach((array, id) => {
    arr[id] = [
      array[0] * newMat2[0][0] + array[1] * newMat2[0][1],
      array[0] * newMat2[1][0] + array[1] * newMat2[1][1]
    ];
  });
  return arr;
};
