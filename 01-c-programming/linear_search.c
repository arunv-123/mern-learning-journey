#include <stdio.h>
int main()
{
    int i, found = 0, key, size; 
    printf("Enter the size: ");
    scanf("%d", &size);
    int array[size];
    printf("Enter the elements: ");
    for (i=0; i<size; i++)
    {
        scanf("%d",&array[i]);
    }
    printf("Enter the value to find: ");
    scanf("%d", &key);

    for (i=0; i<size; i++)
    {
        if(array[i]==key)
        {
            found = 1; 
            printf("The element %d is found at index %d\n", key, i);
        }
    }
        if(!found)//found == 0;
        {
            printf("The element is not found");
        }
}