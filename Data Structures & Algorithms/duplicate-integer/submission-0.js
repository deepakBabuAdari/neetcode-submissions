class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
      let n = nums.length
       let arr = [];
       for(let i=0;i<n;i++){
         for(let j=i+1;j<n;j++){
            if(nums[i] == nums[j]) arr.push(nums[j])
         }
       }
       if(arr.length>=1){
        return true
       }
       else{
        return false
       }
    }

}
