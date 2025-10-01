#include <stdio.h>
#include <stdlib.h>

typedef struct {
    int *arr;
    int len;
    int capacity;
} IntArray;

// Initialize with capacity
void initIntArray(IntArray *ia, int capacity) {
    if (capacity <= 0) capacity = 1;
    ia->len = 0;
    ia->capacity = capacity;
    ia->arr = (int*) malloc(sizeof(int) * ia->capacity);
}

// Double capacity
void resize(IntArray *ia) {
    ia->capacity *= 2;
    ia->arr = (int*) realloc(ia->arr, sizeof(int) * ia->capacity);
}

// Add element
void add(IntArray *ia, int elem) {
    if (ia->len >= ia->capacity) {
        resize(ia);
    }
    ia->arr[ia->len++] = elem;
}

// Get element
int get(IntArray *ia, int index) {
    if (index < 0 || index >= ia->len) {
        printf("Index out of bounds\n");
        exit(1);
    }
    return ia->arr[index];
}

// Set element
void set(IntArray *ia, int index, int elem) {
    if (index < 0 || index >= ia->len) {
        printf("Index out of bounds\n");
        exit(1);
    }
    ia->arr[index] = elem;
}

// Remove element at index
void removeAt(IntArray *ia, int rm_index) {
    if (rm_index < 0 || rm_index >= ia->len) {
        printf("Index out of bounds\n");
        return;
    }
    for (int i = rm_index; i < ia->len - 1; i++) {
        ia->arr[i] = ia->arr[i + 1];
    }
    ia->len--;
}

// Reverse array
void reverse(IntArray *ia) {
    for (int i = 0; i < ia->len / 2; i++) {
        int tmp = ia->arr[i];
        ia->arr[i] = ia->arr[ia->len - i - 1];
        ia->arr[ia->len - i - 1] = tmp;
    }
}

// Bubble sort
void sort(IntArray *ia) {
    for (int i = 0; i < ia->len - 1; i++) {
        for (int j = 0; j < ia->len - i - 1; j++) {
            if (ia->arr[j] > ia->arr[j + 1]) {
                int tmp = ia->arr[j];
                ia->arr[j] = ia->arr[j + 1];
                ia->arr[j + 1] = tmp;
            }
        }
    }
}

// Print array
void printArray(IntArray *ia) {
    printf("[");
    for (int i = 0; i < ia->len; i++) {
        if (i < ia->len - 1) printf("%d, ", ia->arr[i]);
        else printf("%d", ia->arr[i]);
    }
    printf("]\n");
}

// Free memory
void freeArray(IntArray *ia) {
    free(ia->arr);
    ia->arr = NULL;
    ia->len = 0;
    ia->capacity = 0;
}

// Example usage
int main() {
    IntArray ar;
    initIntArray(&ar, 2);

    add(&ar, 3);
    add(&ar, 7);
    add(&ar, 6);
    add(&ar, -2);

    sort(&ar);         // [-2, 3, 6, 7]
    printArray(&ar);

    reverse(&ar);      // [7, 6, 3, -2]
    printArray(&ar);

    removeAt(&ar, 1);  // remove 6
    printArray(&ar);

    freeArray(&ar);
    return 0;
}
