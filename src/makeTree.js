import { Traveslas } from "./travesals";

function createBinaryNode(key) {
  return {
    key,
    left: null,
    right: null,
    addLeft(leftKey) {
      const newLeft = createBinaryNode(leftKey);
      this.left = newLeft;
      return newLeft;
    },
    addRight(rightKey) {
      const newRight = createBinaryNode(rightKey);
      this.right = newRight;
      return newRight;
    }
  };
}
export function createTree(key) {
  const root = createBinaryNode(key);

  return {
    root,
    print(opt = "IN_ORDER") {
      let result = "";
      const visitNode = node => {
        result += !result.length ? `${node.key}` : ` => ${node.key}`;
      };

      Traveslas[opt](root, visitNode);
      return result;
    }
  };
}
