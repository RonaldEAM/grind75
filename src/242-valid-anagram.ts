/*

Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

---

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true

---

Example 2:

Input: s = "rat", t = "car"
Output: false

---

Constraints:

* 1 <= s.length, t.length <= 5 * 104
* s and t consist of lowercase English letters.

*/

export function isAnagram(s: string, t: string): boolean {
  const sMap = getOccurrencesMap(s);
  const tMap = getOccurrencesMap(t);

  if (Object.keys(sMap).length !== Object.keys(tMap).length) {
    return false;
  }

  for (const key of Object.keys(sMap)) {
    if (!(key in tMap) || tMap[key] !== sMap[key]) {
      return false;
    }
  }

  return true;
}

function getOccurrencesMap(str: string): Record<string, number> {
  const occurrencesMap: Record<string, number> = {};
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (!(char in occurrencesMap)) {
      occurrencesMap[char] = 0;
    }
    occurrencesMap[char] += 1;
  }
  return occurrencesMap;
}
