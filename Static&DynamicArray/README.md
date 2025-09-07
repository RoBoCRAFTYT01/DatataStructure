# Static Array

## What is Static Array ?

- A static Array is a fixed length containing n elements **indexable** from the range [ 0 , n - 1 ].

## Where used it ?

1. Storing and accessing sequential data
2. Temporarily storing objects
3. Used by 10 routines as buffers
4. Lookup tables and inverse lookup tables
5. Can be used to return multiple values from a function
6. Used in dynamic programming to cache answers to subproblems

## Complexity

| **/** | **Static Array** | **Dynamic Array** |
| --- | --- | --- |
| **Access** | O( 1 ) | O( 1 ) |
| **Search** | O( n ) | O( n ) |
| **Insertion** | N / A | O( n ) |
| **Appending** | N / A | O( 1 ) |
| **Deletion** | N / A | O( n ) |

# Dynamic Arrays

## What is Dynamic Arrays ?

- the dynamic array can **grow** and  **shrink** in size .

A = [ 34, 4 ]

A.add( -7 ) ⇒ A = [ 34, 4, 7 ]

A.add( 34 ) ⇒ A = [ 34, 4, 7, 34 ]

A.remove( 4 ) ⇒ A ] [ 34, 7, 34 ]

<aside>
<img src="/icons/light-bulb_gray.svg" alt="/icons/light-bulb_gray.svg" width="40px" />

> **Q : How can we implement a dynamic array ?**
> 
- One way is to use a static array !
</aside>

1. Create a static array with an initial capacity .
2. Add element to the underlying static array, keeping track of the of elements.
3. If adding another element will exceed the capacity, then create a new static array with twice the capacity and copy the original element into it.

## Source Code

[Source Code](/Static&DynamicArray/source.java)
**Explain in the video start in (** [00:27:40](https://www.youtube.com/watch?v=RBSGKlAvoiM&t=1660s) **)**