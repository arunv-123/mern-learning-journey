#include <stdio.h>

int main()
{
    int size, i, j, temp = 0;

    printf("Enter the size: ");
    scanf("%d", &size);

    int array[size];

    printf("Enter the elements:\n");
    for (i = 0; i < size; i++)
    {
        scanf("%d", &array[i]);
    }

    for (i = 0; i < size - 1; i++)
    {
        for (j = 0; j < size - i - 1; j++)
        {
            if (array[j] < array[j + 1])
            {
                temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }

    printf("Descended array:\n");
    for (i = 0; i < size; i++)
    {
        printf("%d\t", array[i]);
    }
    for (i = 0; i < size / 2; i++)
    {
        {

            temp = array[i];
            array[i] = array[size - i - 1];
            array[size - i - 1] = temp;
        }
    }
    printf("\nReversed array:\n");
    for (i = 0; i < size; i++)
    {
        printf("%d\t", array[i]);
    }

    return 0;
}