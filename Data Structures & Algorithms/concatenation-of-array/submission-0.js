class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
       let tempArr = nums
       let ans = [...nums,...tempArr]
       return ans

    }
}
