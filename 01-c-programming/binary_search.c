#include <stdio.h>
int main()
{
    int i, key, j, size, target, found=0;
    printf("Enter the size: ");
    scanf("%d", &size);
    int array[size];
    printf("Enter the elements: ");
    for (i = 0; i < size; i++)
    {
        scanf("%d", &array[i]);
    }

    for (i = 0; i < size; i++) {
        key = array[i];
        j = i - 1;

        while (j >= 0 && array[j] > key) {
            array[j + 1] = array[j];
            j = j - 1;
        }

        array[j + 1] = key; 
    }
    printf("Enter the value to find: ");
    scanf("%d", &target);

    int low = 0, high = size - 1;
    int mid;

    while (low <= high)
    {
        mid = (low + high) / 2;
        if (array[mid] == target)
        {
            printf("The element %d is found at index %d", target, mid);
            found = 1;
            break;
        }
        else if (array[mid] < target)
        {
            low = mid + 1;
        }
        else
        {
            high = mid - 1;
        }
    }

    if (!found)
    {
        printf("The element is not found");
    }
}