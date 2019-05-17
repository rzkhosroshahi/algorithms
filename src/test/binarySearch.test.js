import { binarySearch } from "../binarySearch";

test("binary search", () => {
  expect(binarySearch([1, 9, 8, 7, 6, 5, 4, 3, 2], 9)).toEqual(8);
});

test("binary search", () => {
  expect(binarySearch([1, 9, 8, 7, 6, 5, 4, 3, 2], 10)).toEqual(
    "can't find 10"
  );
});
