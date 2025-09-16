#include <stdio.h>
#define size 100

int array[size];
int top = -1;

void push()
{
    int value;
    if (top == size - 1)
    {
        printf("stack is full");
    }
    else
    {
        printf("enter the value to push");
        scanf("%d", &value);
        top++;
        array[top] = value;
        printf("%d is pushed to the stack", value);
    }
}

void pop()
{
    if (top == -1)
    {
        printf("stack is empty");
    }
    else
    {
        printf("stack is popped");
        top--;
    }
}
void peek()
{
    if (top == -1)
    {
        printf("stack is empty");
    }
    else
    {
        printf("%d", array[top]);
    }
}
void display()
{
    for (int i = 0; i <= top; i++)
    {
        printf("%d", array[i]);
    }
}

int main()
{
    int choice;
    while (1)
    {
        printf("\n1.push\n2.pop\n3.peek\n4.display\n5.exit\n");
        printf("enter the choice\n");
        scanf(" %d", &choice);

        switch (choice)
        {
        case 1:
            push();
            break;
        case 2:
            pop();
            break;
        case 3:
            peek();
            break;
        case 4:
            display();
            break;
        case 5:
            printf("program is stopped\n");
            return 0;
        default:
            printf("invalid choice\n");
        }
    }
}