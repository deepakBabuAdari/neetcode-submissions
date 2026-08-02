class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */

    // TC:O(n)
    isAnagram(s, t) {
        if (s.length !== t.length) return false;
        const chars = Array(26).fill(0)
          console.log(chars)
        for (let i = 0; i < s.length; i++) {
            chars[s.charCodeAt(i) - 97]++;// 97 represents a in ASCII
            chars[t.charCodeAt(i) - 97]--;
        }

        return chars.every(el => el === 0)
    }
}
