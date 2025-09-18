#include <stdio.h>

int main()
{
    int size, i, j, temp;
    printf("Enter the size: ");
    scanf("%d", &size);

    int array[size];
    printf("Enter the elements:\n");
    for (i = 0; i < size; i++)
    {
        scanf("%d", &array[i]);
    }

    // Bubble sort (ascending)
    for (i = 0; i < size - 1; i++)
    {
        for (j = 0; j < size - i - 1; j++)
        {
            if (array[j] > array[j + 1])
            {
                temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }

    // Find closest value
    int closest = array[0];
    for (i = 1; i < size; i++)
    {
        int absCurr = (array[i] < 0) ? -array[i] : array[i];
        int absClose = (closest < 0) ? -closest : closest;

        if (absCurr < absClose)
            closest = array[i];
    }

    // Check if opposite sign with same absolute value exists
    int absClosest = (closest < 0) ? -closest : closest;
    int foundPair = 0, other;

    for (i = 0; i < size; i++)
    {
        if (array[i] == -closest) // opposite match
        {
            foundPair = 1;
            other = array[i];
            break;
        }
    }

    if (foundPair)
        printf("\nThe closest number to zero is %d and %d\n", closest, other);
    else
        printf("\nThe closest number to zero is %d\n", closest);

    return 0;
}
