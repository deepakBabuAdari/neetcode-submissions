class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    //Time: O(nlogn), Space: O(n)
    isAnagram(s, t) {
       let cleanString1 = s.split('').sort().join(``);  
       let cleanString2 = t.split('').sort().join(``);
        return cleanString1 === cleanString2
          }
}
