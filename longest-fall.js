// add whatever parameters you deem necessary
function longestFall(nums) {
    let counter = 1;
    let maxCounter = 0;

    //return zero for empety array
    if(nums.length === 0) return 0;

    for(let i = 1; i < nums.length; i++) {
        if(nums[i] < nums[i - 1]) {
            counter++;
            maxCounter = Math.max(counter, maxCounter);
        } else {
            counter = 1;
        }
    }
    // one is default value for non-empety array
    return maxCounter || 1;    
}

module.exports = longestFall;