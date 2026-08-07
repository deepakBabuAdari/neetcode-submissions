class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
    const baseWord = strs[0];
      for(let i=0;i<baseWord.length;i++){
          let char = baseWord[i];
           for(let j=1;j<strs.length;j++){
             if(i === strs[j].length || strs[j][i]!==char) return baseWord.substring(0,i);
           }
      }  
      return baseWord       
    }
}
