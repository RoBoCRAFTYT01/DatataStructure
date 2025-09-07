# About Singly & Doubly linked List

## What is Linked List ?

<aside>
<img src="/icons/verified_gray.svg" alt="/icons/verified_gray.svg" width="40px" />

A linked list is a sequential list of nodes that hold data which point to other nodes also containing data

</aside>

- **Data** ⇒ **Data** ⇒ **Data** ⇒ **Data** ⇒ **Null**

## Where are linked list used ?

- Use in many **List**, **Queue** & [**Stack**](https://www.notion.so/Stack-Introduction-2531bcd19f56802fa6c5e323976b14d2?pvs=21) implementation .
- Great for creating circular lists .
- Can easily model real world objects such as trains .
- Use in separate chaining, which is present certain **Hashtable** implementations to deal with **hashing** collision .
- Often used in the implementation of adjacency lists for graphs .

 

## Terminology

- **Head :**  The first node in a linked list **.**
- **Tail :** the last node a linked list **.**
- **Pointers :** Reference to another node  **.**
- **Node :** An object containing data pointer(s) **.**

## Singly Vs Doubly Linked List

### Singly List

- only hold a reference to the next node. In the implementation you always maintain a reference to the **Head** to the linked list and a reference to the **Tail** node for quick additions / removals.

<aside>
<img src="/icons/square-alternate_gray.svg" alt="/icons/square-alternate_gray.svg" width="40px" />

**3 ⇒ 84 ⇒ 85 ⇒ 21 ⇒ 90 ⇒ 29 ⇒ 44 ⇒ 30**

</aside>

### Doubly List

- Each node holds a reference to the next and previous node. In the implementation you always maintain a reference to the **Head** and the **Tail** of the doubly linked list to do quick additions / removals from both ends of your list.

<aside>
<img src="/icons/square-alternate_gray.svg" alt="/icons/square-alternate_gray.svg" width="40px" />

**15↔6↔23↔4↔7↔71↔5↔50**

</aside>

### Pros and Cons

| **/** | **Pros** | **Cons** |
| --- | --- | --- |
| **Singly Linked** | uses less memory simpler implementation | cannot easily access previous element  |
| **Doubly Linked** | Can be traversed backwards  | Take 2* memory |

# Implementation Details

## Inserting Singly Linked List

- Insert 11 where the third node is .

![Untitled Diagram.drawio.png](attachment:274ec754-d3b4-4874-961c-9ae33557145f:Untitled_Diagram.drawio.png)

- So first make new **Trav** and start found third node .

![Untitled Diagram.drawio 1.png](attachment:1fd39e5a-eeba-4887-b922-4a37d41e4282:Untitled_Diagram.drawio_1.png)

- so create the new node and put it in the third node where node[7] in .

![Untitled Diagram.drawio 2.png](attachment:c80854c5-2f79-40ac-8b4a-6b80bba62ce4:Untitled_Diagram.drawio_2.png)

- and here node[11] next them with node[7] and node[23] next them with node[11].

![Untitled Diagram.drawio 3.png](attachment:89b03d93-e72a-4ca9-b981-6475696a6e06:Untitled_Diagram.drawio_3.png)

- and there is the result .

![Untitled Diagram.drawio (1).png](attachment:90db7196-0e1b-4eb6-ac96-6334b657453f:Untitled_Diagram.drawio_(1).png)

## Removing from Singly Linked List

- Remove 9 from the following SLL .

![Untitled Diagram.drawio (2).png](attachment:27580a49-ec51-4703-8ebe-6cf38659cfb4:Untitled_Diagram.drawio_(2).png)

- here we will make two **Trav** in the first and next node .
- start moving until **Trav** 2 found node[9] .
- after that make new pointer **temp** to save node[9] later and move **Trav** 2 to node[15] .
- like that we have **Trav** 1 in node[4] **Trav** 2 in node[15] and **temp** in node[9] like that :

![Untitled Diagram.drawio (3).png](attachment:d292bcc0-760c-47c8-9bc9-19cb9fd248de:Untitled_Diagram.drawio_(3).png)

- we will linked node[4] with node[15] .
- and after that we can remove node[9] because there is no pointer do something with it :

![Untitled Diagram.drawio (4).png](attachment:cddf1192-c769-4ea9-83d7-14a651b1d2a5:Untitled_Diagram.drawio_(4).png)

<aside>
<img src="/icons/light-bulb_gray.svg" alt="/icons/light-bulb_gray.svg" width="40px" />

**Note :** in DLL to remove a node only use one **Trav** and other setup the same **.**

</aside>

# Complexity Analysis

| **/** | **SLL** | **DLL** |
| --- | --- | --- |
| **Search** | O( n ) | O( n ) |
| **Insert at Head** | O( 1 ) | O( 1 ) |
| **Insert at Tail** | O( 1 ) | O( 1 ) |
| **Remove at Head** | O( 1 ) | O( 1 ) |
| **Remove at Tail** | O( n ) | O( 1 ) |
| **Remove at middle** | O( n ) | O( n ) |

# Source Code

<aside>
<img src="/icons/playback-play_gray.svg" alt="/icons/playback-play_gray.svg" width="40px" />

**Explain in the video start in (** [00:49:20](https://www.youtube.com/watch?v=RBSGKlAvoiM&t=2960s) **)**

</aside>
