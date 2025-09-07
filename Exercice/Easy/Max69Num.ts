/**
 * @param num 
 * @returns the max or big number can num be
 */

function maximum69Number(num: number): number {
    let digits: number[] = num.toString().split("").map(Number); // make num type to array of numbers

    for (let i = 0; i < digits.length; i++) {
        if (digits[i] === 6) {
            digits[i] = 9;
            break;
        }
    }; // using loop check each element the first index = 6 then make it 9 and it's the max69num

    return Number(digits.join("")); // return the arrya to number
}

maximum69Number(9666); // 9966 is the max
maximum69Number(6969); // 9966 is the max

/**
 * Time Complexity: O(n)
 *   - Converting to string, splitting, looping, and joining
 *     all depend on the number of digits n in num.
 * 
 * Space Complexity: O(n)
 *   - Extra array of digits and temporary strings take space
 *     proportional to the number of digits.
 * 
 * In Big O:
 *   Time = O(n)
 *   Space = O(n)
 *   (where n = number of digits in num)
 */
