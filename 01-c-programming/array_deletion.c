#include <stdio.h>
int main()
{
    // variables side
    int elem, pos, size, i;

    // input side
    printf("Enter the size: ");
    scanf("%d", &size);
    int array[size];
    printf("Enter the elements:\n");
    for (i = 0; i < size; i++)
    {
        scanf("%d", &array[i]);
    }
    printf("Enter the position to delete the element: ");
    scanf("%d", &pos);
 

    for(i=pos-1; i<size; i++)
    {
        array[i]=array[i+1];
    }
 
   size--;

    printf("Elements entered are:\n");
    for (i = 0; i < size; i++)
    {
        printf("%d\t", array[i]);
    }
}