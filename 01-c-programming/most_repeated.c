#include <stdio.h>
int main()
{
    int size, i, j, count, max_count = 0;
    scanf("%d", &size);
    int array[size];
    for (i = 0; i < size; i++)
        scanf("%d", &array[i]);
    for (i = 0; i < size; i++)
    {
        count = 0;
        for (j = 0; j < size; j++)
            if (array[i] == array[j])
                count++;
        if (count > max_count)
            max_count = count;
    }
    printf("%d\n", max_count);
    return 0;
}
