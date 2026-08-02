class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    //Time: O(n+m) => O(n)
    isAnagram(s, t) {
      if(s.length !== t.length) return false;
         let countMap = {};
          for(let i of s){
            countMap[i] = (countMap[i]||0)+1;
          }
          for(let i of t){
            if(!countMap[i]){
               return false;  
            }
            countMap[i]--;
          }
          return true;
          }

}
