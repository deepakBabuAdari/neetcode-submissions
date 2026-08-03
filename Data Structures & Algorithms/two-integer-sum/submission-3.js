class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    // Using Hashmap to get the approach the solution in 0(n)
    twoSum(nums, target) {

        const check = new Map();

        for(let i=0;i<nums.length;i++){
           let subtractedValue = target - nums[i];
           if(check.has(subtractedValue)){
             return [check.get(subtractedValue),i]
             }
            check.set(nums[i],i)
        }

    }
}
