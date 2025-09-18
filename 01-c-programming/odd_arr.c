#include <stdio.h>
int main()
{
    int size, i;
    scanf("%d", &size);
    int array[size];
    for (i = 0; i < size; i++)
        scanf("%d", &array[i]);
    for (i = 0; i < size; i++)
        if (array[i] % 2 != 0)
            printf("$ ");
        else
            printf("%d ", array[i]);
    printf("\n");
    return 0;
}
