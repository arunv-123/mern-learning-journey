#include <stdio.h>
int main()
{
    int size, i, j, temp, k = 0;
    scanf("%d", &size);
    int array[size], unique[size];
    for (i = 0; i < size; i++)
        scanf("%d", &array[i]);
    for (i = 0; i < size - 1; i++)
        for (j = i + 1; j < size; j++)
            if (array[i] > array[j])
            {
                temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
    for (i = 0; i < size; i++)
        if (i == 0 || array[i] != array[i - 1])
            unique[k++] = array[i];
    for (i = 0; i < k; i++)
        printf("%d ", unique[i]);
    printf("\n");
    return 0;
}
