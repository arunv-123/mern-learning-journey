#include <stdio.h>
int main()
{
    int size, i, odd_count = 0, even_count = 0;
    scanf("%d", &size);
    int array[size], odd[size], even[size];
    for (i = 0; i < size; i++)
        scanf("%d", &array[i]);
    for (i = 0; i < size; i++)
    {
        if (array[i] % 2 == 0)
            even[even_count++] = array[i];
        else
            odd[odd_count++] = array[i];
    }
    for (i = 0; i < odd_count; i++)
        printf("%d ", odd[i]);
    printf("\n");
    for (i = 0; i < even_count; i++)
        printf("%d ", even[i]);
    printf("\n");
    return 0;
}
