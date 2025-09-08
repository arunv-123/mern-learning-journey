#include <stdio.h>
int main()
{
    // variables side
    int elem, pos, size, new, i;


    // input side
    printf("Enter the size:");
    scanf("%d", &size);
    int array[size];
    printf("Enter the elements:");
    for (i = 0; i < size; i++)
    {
        scanf("%d", &array[i]);
    }
    printf("Enter the position to insert the element:");
    scanf("%d", &pos);
    printf("Enter the element to insert:");
    scanf("%d", &new);

    for(i=size; i>=pos-1; i--)
    {
        array[i+1]=array[i];
    }
    array[pos-1]=new;
   size++;

    printf("Elements entered are:");
    for (i = 0; i < size; i++)
    {
        printf("%d \t", array[i]);
    }
}