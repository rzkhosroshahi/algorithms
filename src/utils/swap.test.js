import { swap } from "./swap";

test("swap array ", () => {
  expect(swap([8, 7, 6, 5, 4, 2, 1], 0, 1)).toEqual([7, 8, 6, 5, 4, 2, 1]);
});
