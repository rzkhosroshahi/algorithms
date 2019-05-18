import { selectionSort } from "../selectionSort";

test("selectionSort ", () => {
  const arr = [1, 9, 8, 7, 6, 5, 4, 3, 2];
  expect(selectionSort(arr)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
});
