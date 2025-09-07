# Big O Notation

As programmers, we often find ourselves asking the same two questions over and over again :

- How much **time** does this algorithm need to finish ?
- How much **space** does this algorithm need for this computation ?

---

## What is Big O Notation ?

Big O Notation gives and upper bound of the complexity in the **worst case**, helping to quantify performance as the input size becomes **arbitrarily large**

we put n - the size of the input Complexities ordered in from smallest to largest :

- [**Constant Time :** O( 1 ) **.**](https://www.notion.so/Big-O-Notation-2521bcd19f5680f2aa32c408542f01e5?pvs=21)
- [**Logarithmic Time :** O( log( n ) ) **.**](https://www.notion.so/Big-O-Notation-2521bcd19f5680f2aa32c408542f01e5?pvs=21)
- [**Linear Time :** O( n ) **.**](https://www.notion.so/Big-O-Notation-2521bcd19f5680f2aa32c408542f01e5?pvs=21)
- **Linearithmic Time :** O( n*log( n ) ) **.**
- [**Quadric Time :** O( n^2 ) **.**](https://www.notion.so/Big-O-Notation-2521bcd19f5680f2aa32c408542f01e5?pvs=21)
- **Cubic Time :** O( n^3 ) **.**
- **Exponential Time :** O( b^n ) **.**
- **Factorial Time :** O( n! ) **.**

---

## Big O Properties

- O( n + c ) = O( n )
- O( cn ) = O( n )

let f be a function that describes the running time of a particular algorithm for a input of size n:

- f( n ) = 7log( n )^3 + 15n^2 + 2n^3 + 8
- O( f( n ) ) = O( n^3 )

**Note :** 

- The big power in the function is the power of n in the Big O.
- Ignore const and the small value like log( n )
- Big O expressions will define time, complexity and space.

---

# The goal of all time

- Finding all subsets of a set - O( 2^n )
- Finding all permutations of a string - O( n! )
- Sorting using mergesort - O( n*log( n ) )
- Iterating over all the cells in a matrix of size n by m - O( nm )

# Time Complexity

1. Arithmetic operations are constant
2. Variable assignment is constant
3. Accessing elements in an array (by index) or object (by key) is constant
4. In a loop, the complexity is the length of the loop times the complexity of whatever happens inside the loop

# Space Complexity

- Most primitives (boolean, numbers, undefined, null) are constant space.
- Strings require O(n) space (where n is the string length).
- Reference types are generally O(n), where n is the length (for arrays) or the number of keys (for objects).

**Note :**

- Time Complexity Defined by the operations executed in the code.
- Space Complexity Defined by the types of variables used.