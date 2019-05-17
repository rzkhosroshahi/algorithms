import { selectionSort } from "../selectionSort";

test("selectionSort ", () => {
  expect(selectionSort([5, 1, 2, 7, 3, 6])).toEqual([1, 2, 3, 5, 6, 7]);
});
