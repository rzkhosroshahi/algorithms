export const inOrder = (tree, visitNode) => {
  if (tree !== null) {
    inOrder(tree.left, visitNode);
    visitNode(tree);
    inOrder(tree.right, visitNode);
  }
};

export const Traveslas = {
  IN_ORDER(tree, visitNode) {
    if (tree !== null) {
      this.IN_ORDER(tree.left, visitNode);
      visitNode(tree);
      this.IN_ORDER(tree.right, visitNode);
    }
  },
  PRE_ORDER(tree, visitNode) {
    if (tree !== null) {
      visitNode(tree);
      this.PRE_ORDER(tree.left, visitNode);
      this.PRE_ORDER(tree.right, visitNode);
    }
  },
  POST_ORDER(tree, visitNode) {
    if (tree !== null) {
      this.POST_ORDER(tree.left, visitNode);
      this.POST_ORDER(tree.right, visitNode);
      visitNode(tree);
    }
  }
};
