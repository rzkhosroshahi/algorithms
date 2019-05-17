import { reverse2dArray } from "./array2dutils";

test("reverse2dArray ", () => {
  expect(reverse2dArray([[4, 0], [1, 9]])).toEqual([[4, 1], [0, 9]]);
});
