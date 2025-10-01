#include <stdio.h>

#define MAX 100

typedef struct Node {
    int data;
    int prev;
    int next;
    int used;
} Node;

typedef struct {
    Node nodes[MAX];
    int head;
    int tail;
    int size;
} DoublyLinkedList;

// Initialize list
void init(DoublyLinkedList* list) {
    list->head = -1;
    list->tail = -1;
    list->size = 0;
    for (int i = 0; i < MAX; i++) {
        list->nodes[i].used = 0;
        list->nodes[i].prev = -1;
        list->nodes[i].next = -1;
    }
}

// Find a free node slot
int newNode(DoublyLinkedList* list, int data) {
    for (int i = 0; i < MAX; i++) {
        if (!list->nodes[i].used) {
            list->nodes[i].used = 1;
            list->nodes[i].data = data;
            list->nodes[i].prev = -1;
            list->nodes[i].next = -1;
            return i;
        }
    }
    return -1; // list full
}

// Add to tail
void addLast(DoublyLinkedList* list, int data) {
    int idx = newNode(list, data);
    if (idx == -1) return;

    if (list->size == 0) {
        list->head = list->tail = idx;
    } else {
        list->nodes[idx].prev = list->tail;
        list->nodes[list->tail].next = idx;
        list->tail = idx;
    }
    list->size++;
}

// Add to head
void addFirst(DoublyLinkedList* list, int data) {
    int idx = newNode(list, data);
    if (idx == -1) return;

    if (list->size == 0) {
        list->head = list->tail = idx;
    } else {
        list->nodes[idx].next = list->head;
        list->nodes[list->head].prev = idx;
        list->head = idx;
    }
    list->size++;
}

// Print list
void printList(DoublyLinkedList* list) {
    int trav = list->head;
    printf("[ ");
    while (trav != -1) {
        printf("%d", list->nodes[trav].data);
        trav = list->nodes[trav].next;
        if (trav != -1) printf(", ");
    }
    printf(" ]\n");
}

// Remove first
int removeFirst(DoublyLinkedList* list) {
    if (list->size == 0) return -1;
    int idx = list->head;
    int data = list->nodes[idx].data;

    list->head = list->nodes[idx].next;
    if (list->head != -1) list->nodes[list->head].prev = -1;
    else list->tail = -1;

    list->nodes[idx].used = 0;
    list->size--;
    return data;
}

// Remove last
int removeLast(DoublyLinkedList* list) {
    if (list->size == 0) return -1;
    int idx = list->tail;
    int data = list->nodes[idx].data;

    list->tail = list->nodes[idx].prev;
    if (list->tail != -1) list->nodes[list->tail].next = -1;
    else list->head = -1;

    list->nodes[idx].used = 0;
    list->size--;
    return data;
}

// Demo
int main() {
    DoublyLinkedList list;
    init(&list);

    addLast(&list, 10);
    addLast(&list, 20);
    addFirst(&list, 5);
    addLast(&list, 30);

    printList(&list);

    removeFirst(&list);
    printList(&list);

    removeLast(&list);
    printList(&list);

    return 0;
}
