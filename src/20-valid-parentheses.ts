/*

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

    Open brackets must be closed by the same type of brackets.
    Open brackets must be closed in the correct order.
    Every close bracket has a corresponding open bracket of the same type.

---

Example 1:

Input: s = "()"
Output: true

---

Example 2:

Input: s = "()[]{}"
Output: true

---

Example 3:

Input: s = "(]"
Output: false

---

Constraints:

- 1 <= s.length <= 104
- s consists of parentheses only '()[]{}'.

*/

export function isValid(s: string): boolean {
  const stack: Array<string> = [];
  const parenthesesMap = {
    ')': '(',
    ']': '[',
    '}': '{'
  };

  for (let i = 0; i < s.length; i++) {
    const char: string = s[i];
    if (char in parenthesesMap) {
      const lastP = stack.pop();
      if (parenthesesMap[char as ')' | ']' | '}'] !== lastP) {
        return false;
      }
      continue;
    }
    stack.push(char);
  }

  return !stack.length;
}
