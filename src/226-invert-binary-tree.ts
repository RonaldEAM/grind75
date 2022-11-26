class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function invertSubTree(root: TreeNode | null) {
  if (!root) {
    return;
  }

  invertSubTree(root.left);
  invertSubTree(root.right);

  const left = root.left;
  root.left = root.right;
  root.right = left;
}

export function invertTree(root: TreeNode | null): TreeNode | null {
  invertSubTree(root);
  return root;
}
