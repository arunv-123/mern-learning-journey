#include <stdio.h>

#define SIZE 100

int queue[SIZE];
int front = -1, rear = -1;

void enqueue(int value) {
    if (rear == SIZE - 1) {
        printf("The queue is full\n");
    } else {
        if (front == -1) {
            front = 0;  
        }
        rear++;
        queue[rear] = value;
        printf("%d enqueued to queue\n", value);
    }
}

void dequeue() {
    if (front == -1 || front > rear) {
        printf("The queue is empty\n");
        front = rear = -1; // reset after empty
    } else {
        printf("%d dequeued from queue\n", queue[front]);
        front++;
        if (front > rear) {
            // queue became empty
            front = rear = -1;
        }
    }
}

void peek() {
    if (front == -1 || front > rear) {
        printf("The queue is empty\n");
    } else {
        printf("Front element is: %d\n", queue[front]);
    }
}

void display() {
    if (front == -1 || front > rear) {
        printf("Queue is empty\n");
    } else {
        printf("Queue elements: ");
        for (int i = front; i <= rear; i++) {
            printf("%d ", queue[i]);
        }
        printf("\n");
    }
}

int main() {
    int method, inputValue;

    while (1) {
        printf("\nChoose an option:\n");
        printf("1. Enqueue\n");
        printf("2. Dequeue\n");
        printf("3. Peek\n");
        printf("4. Display\n");
        printf("5. Exit\n");
        printf("Choice: ");
        scanf("%d", &method);

        switch (method) {
            case 1:
                printf("Enter value to enqueue: ");
                scanf("%d", &inputValue);
                enqueue(inputValue);
                break;
            case 2:
                dequeue();
                break;
            case 3:
                peek();
                break;
            case 4:
                display();
                break;
            case 5:
                printf("Program Stopped\n");
                return 0;
            default:
                printf("Invalid choice\n");
        }
    }

    return 0;
}