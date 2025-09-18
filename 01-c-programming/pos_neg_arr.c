#include <stdio.h>
int main()
{
    int size, i, pos_count = 0, neg_count = 0;
    scanf("%d", &size);
    int array[size], pos[size], neg[size];
    for (i = 0; i < size; i++)
        scanf("%d", &array[i]);
    for (i = 0; i < size; i++)
    {
        if (array[i] >= 0)
            pos[pos_count++] = array[i];
        else
            neg[neg_count++] = array[i];
    }
    for (i = 0; i < pos_count; i++)
        printf("%d ", pos[i]);
    printf("\n");
    for (i = 0; i < neg_count; i++)
        printf("%d ", neg[i]);
    printf("\n");
    return 0;
}
