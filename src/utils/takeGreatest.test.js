import { takeGreatest } from "./takeGreatest";

test("takeGreatest ", () => {
  expect(takeGreatest([0, 1, 2, 3, 4, 5, 10])).toEqual(10);
});
