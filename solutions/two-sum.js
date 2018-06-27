/**
 * @param {number[]} nums 
 * @param {number} target 
 * @return {number[]}
 */
const twoSumOne = function (nums, target) {
    const len = nums.length;

    for(let i = 0; i < len; i++) {
        for(let j = i + 1; j <= len; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
};

const twoSumTwo = function (nums, target) {
    const obj = {};

    for(let i = 0; i < nums.length; i++) {
        const num = nums[i];
        const numStr = num + '';

        if (obj[numStr] !== undefined) {
            return [obj[numStr], i];
        }

        obj[target - num] = i; 
    }
};

const twoSum = function (nums, target) {
    const hash = {};

    for(let i = 0; i < nums.length; i++) {
        const num = nums[i];
        let complementIndex = hash[target - num];

        if (typeof complementIndex !== 'undefined') {
            return [complementIndex, i];
        }

        hash[num] = i;
    }
};

console.log(twoSum([2,7,11,15], 9));