/**
 * @param x the number want to reverse it to check if plinedroom
 * @returns check that x without or with reservit's same number
 */

function isPalindrome(x: number): boolean {
    const xArray : number[] = x.toString().split("").map(Number); 

    return xArray.join() === [...xArray].reverse().join();
};

isPalindrome(1221); // true because 1221 === 1221
isPalindrome(5894); // false because 5894 !== 4985

/**
 * Time Complexity: O(n)
 *   - Converting to string and reversing depends on number of digits n.
 * 
 * Space Complexity: O(n)
 *   - Extra arrays/strings for split and reverse.
 * 
 * In Big O:
 *   Time = O(n)
 *   Space = O(n)
 */