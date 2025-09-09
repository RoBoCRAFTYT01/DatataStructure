/**
 * Constant Time O(1)
 * Most primitives (boolean, numbers, undefined, null) are constant space.
 */

let arr : number[] = [1, 2, 3];
function sum(a : number[]) : number {
    let total : number = 0;
    for (let i : number = 0; i < a.length; i++) {
        total += a[i];
    }
    return total;
}

sum(arr); // 6 => O(1)
// Loop it doesn't affect it at all.
// we focuse about the type using in the function and only we use number and is constant

/**
 * Creates a new array where each element is doubled from the input array.
 *
 * @param arr - Array of numbers to double
 * @returns A new array of numbers (length = arr.length)
 *
 * @timecomplexity O(n) - loops through all elements once
 * @spacecomplexity O(n) - creates a new array of the same length
 */

function double(arr: number[]): number[] {
    let newArray: number[] = [];
    for (let i: number = 0; i < arr.length; i++) {
        newArray.push(2 * arr[i]);
    }
    return newArray;
}