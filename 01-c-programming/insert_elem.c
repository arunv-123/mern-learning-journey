#include <stdio.h>
int main()
{
    int size, i, element;
    scanf("%d", &size);
    int array[size + 1];
    for (i = 0; i < size; i++)
        scanf("%d", &array[i]);
    scanf("%d", &element);
    array[size] = element;
    for (i = 0; i <= size; i++)
        printf("%d ", array[i]);
    printf("\n");
    return 0;
}
