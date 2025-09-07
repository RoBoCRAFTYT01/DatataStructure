/**
 * @param nums random array of numbers
 * @param target the target number we need find it using nums[]
 * @returns nums[i] + nums[j] === target
 */

function twoSum(nums: number[], target: number): number[] {
    for(let i : number = 0; i < nums.length; i++) {
        for(let j : number = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    };

    return [];
};

/**
 * Time Complexity: O(n²)
 *   - Two nested loops: for each element i, we check all j > i.
 *   - Worst case, we scan ~n² pairs.
 * 
 * Space Complexity: O(1)
 *   - Uses only a few variables (i, j), no extra data structures.
 * 
 * In Big O:
 *   Time = O(n²)
 *   Space = O(1)
 */