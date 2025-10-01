/**
 * Constant Time : O( 1 )
 * the following run is constant time: O( 1 ) .
 */

// all is constant never added or repeated
const a: number = 1;
const b: number = 2;
const c: number = a + 5 * b;

// with loops stay same if the end is known or a constant number
let i: number = 0;
while (i < 11) {
    i = i + i;
}

/**
 * Linear Time : O( n )
 * the following run is linear time: O( n ) .
 * In all cases, as long as the end of the loop is n, it is a linear function.
 */

let j: number = 0;
let n: number = 1000; // n can be more then 1000
while (j < n) {
    i = i + 1;
};
// f ( n ) = n
// O( f( n ) ) = O( n )

while (i < n) {
    i = i + 3;
};
// f ( n ) = n/3
// O( f( n ) ) = O( n )

/**
 * Quadric Time : O( n^2 )
 * the first one may be obvious since n work done n times is n*n = O( n^2 ) .
 */

for (let i: number = 0; i < n; i++) {
    for (let j: number = 0; j < n; j++) {
        // ...
    }
}

// f( n ) = n*n ⇒ O( f( n ) ) = O( n^2 ) 


for (let i: number = 0; i < n; i++) {
    for (let j: number = i; j < n; j++) {
        // ...
    }
}

// f( n ) = n( n + 1 ) / 2 = n^2/2 + n/2 ⇒ O( f( n ) ) = O( n^2 )

/**
 * since i goes from [ 0 , n ) the amount of looping done is directly determined by what i is.
 * Remark that if  i = 0 , we do n work, if i = 1 , we do n - 1 , if i = p , we do n - p.
 * so is only : n + ( n - 1 ) + ( n - 2 ) + ( n - 3 ) + …. + 3 + 2 + 1.
 * and finally is n( n + 1 ) / 2.
 */


// ---------------------------------------------->

/**
 * Logarithmic Time : O( log( n ) )
 * we have sorted array and we want to find the index of a particular value in the array, if it exists. 
 */

export function FindValue(array: number[], value: number): number {
    let low: number = 0;
    let high: number = array.length - 1;

    while (low <= high) {
        let mid: number = (low + high) / 2;
        if (array[mid] === value) return mid;
        else if (array[mid] < value) low = mid + 1;
        else if (array[mid] > value) high = mid - 1;
    }

    return -1;
};

//is binary search method array must be sorted
