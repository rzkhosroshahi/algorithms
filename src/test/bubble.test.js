import { bubbleSort } from "../bubble";

test("sort array", () => {
  const arr = [1, 9, 8, 7, 6, 5, 4, 3, 2];
  expect(bubbleSort(arr)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
});
