import { createTree } from "../makeTree";

test("inorder travesals ", () => {
  const a = createTree("A");
  const b = a.root.addLeft("B");
  b.addLeft("C");
  b.addRight("D");
  const g = a.root.addRight("G");
  g.addLeft("E");
  g.addRight("F");

  expect(a.print()).toEqual("C => B => D => A => E => G => F");
});

test("preorder travesals ", () => {
  const r = createTree("R");
  const c = r.root.addLeft("C");
  c.addLeft("E");
  c.addRight("G");
  const d = r.root.addRight("D");
  d.addLeft("H");
  d.addRight("K");

  expect(r.print("PRE_ORDER")).toEqual("R => C => E => G => D => H => K");
});

test("postorder travesals ", () => {
  const a = createTree("A");
  const b = a.root.addLeft("B");
  b.addLeft("C");
  b.addRight("D");
  const g = a.root.addRight("G");
  g.addLeft("E");
  g.addRight("F");

  expect(a.print("POST_ORDER")).toEqual("C => D => B => E => F => G => A");
});
