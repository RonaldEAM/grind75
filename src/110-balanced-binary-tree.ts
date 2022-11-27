/*

Given a binary tree, determine if it is height-balanced.

---

Example 1:

Input: root = [3,9,20,null,null,15,7]
Output: true

---

Example 2:

Input: root = [1,2,2,3,3,null,null,4,4]
Output: false

---

Example 3:

Input: root = []
Output: true

---

Constraints:

* The number of nodes in the tree is in the range [0, 5000].
* -104 <= Node.val <= 104

*/

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

export function isBalanced(root: TreeNode | null): boolean {
  if (!root) {
    return true;
  }
  return levelCount(root) !== -1;
}

function levelCount(root: TreeNode | null): number {
  if (!root) {
    return 0;
  }

  const countLeft = levelCount(root.left);
  const countRight = levelCount(root.right);
  if (countLeft === -1 || countRight === -1) {
    return -1;
  }
  const diff = Math.abs(countLeft - countRight);
  if (diff > 1) {
    return -1;
  }
  return Math.max(countLeft, countRight) + 1;
}
