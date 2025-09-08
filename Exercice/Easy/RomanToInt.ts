/**
 * @param s roman number need to make it int number
 * @returns // return the int number
 */

function romanToInt(s: string): number {
    const values: { [key: string]: number } = {
        I: 1, V: 5, X: 10,
        L: 50, C: 100,
        D: 500, M: 1000
    };

    let total = 0;

    for (let i = 0; i < s.length; i++) {
        const current = values[s[i]];
        const next = values[s[i + 1]];

        // if next is larger, subtract current (subtractive notation)
        if (next && current < next) {
            total -= current;
        } else {
            total += current;
        }
    }

    return total;
};


/**
 * Time Complexity: O(n)
 *   - Loop scans each character once.
 * 
 * Space Complexity: O(1)
 *   - Fixed map of 7 Roman symbols, no extra structures growing with input.
 * 
 * In Big O:
 *   Time = O(n)
 *   Space = O(1)
 */
