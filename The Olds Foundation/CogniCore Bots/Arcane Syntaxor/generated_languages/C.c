#include <stdio.h>
#include <stdlib.h>
#include <string.h>

typedef struct {
    int id;
    char name[50];
    float value;
} Record;

typedef struct Node {
    Record data;
    struct Node* next;
} Node;

Node* createNode(int id, const char* name, float value) {
    Node* newNode = (Node*)malloc(sizeof(Node));
    newNode->data.id = id;
    strncpy(newNode->data.name, name, 49);
    newNode->data.value = value;
    newNode->next = NULL;
    return newNode;
}

void insertNode(Node** head, Node* newNode) {
    if (*head == NULL) {
        *head = newNode;
    } else {
        Node* temp = *head;
        while (temp->next != NULL) {
            temp = temp->next;
        }
        temp->next = newNode;
    }
}

void printList(Node* head) {
    printf("\nLinked List Contents:\n");
    Node* current = head;
    int count = 0;
    while (current != NULL) {
        printf("  [%d] ID: %d, Name: %s, Value: %.2f\n",
               count++, current->data.id, current->data.name, current->data.value);
        current = current->next;
    }
}

void freeList(Node* head) {
    Node* current = head;
    Node* next;
    while (current != NULL) {
        next = current->next;
        free(current);
        current = next;
    }
}

int main() {
    printf("==========================================================\n");
    printf("Advanced C Example - Linked List Management\n");
    printf("==========================================================\n");

    Node* head = NULL;

    insertNode(&head, createNode(1, "Item One", 10.5));
    insertNode(&head, createNode(2, "Item Two", 20.3));
    insertNode(&head, createNode(3, "Item Three", 30.7));
    insertNode(&head, createNode(4, "Item Four", 40.2));
    insertNode(&head, createNode(5, "Item Five", 50.9));

    printList(head);

    printf("\n==========================================================\n");
    printf("Program Complete!\n");
    printf("==========================================================\n");

    freeList(head);
    return 0;
}


















































