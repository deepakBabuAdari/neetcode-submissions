class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
       let t = nums
       let ans = [...nums,...t]
       return ans
    }
}
