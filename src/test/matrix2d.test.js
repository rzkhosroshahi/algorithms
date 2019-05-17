import { matrix2d } from "../matrix2d";

const matr1 = [[4, 0], [1, 9]];
const matr2 = [[8, 0], [2, 9]];

test("matrix2d ", () => {
  expect(matrix2d(matr1, matr2)).toEqual([[32, 0], [26, 81]]);
});
