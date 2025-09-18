#include <stdio.h>
int main()
{
    int size, i, temp;
    scanf("%d", &size);
    int array[size];
    for (i = 0; i < size; i++)
        scanf("%d", &array[i]);
    int smallest1 = array[0], smallest2 = array[1];
    if (smallest1 > smallest2)
    {
        temp = smallest1;
        smallest1 = smallest2;
        smallest2 = temp;
    }
    for (i = 2; i < size; i++)
    {
        if (array[i] < smallest1)
        {
            smallest2 = smallest1;
            smallest1 = array[i];
        }
        else if (array[i] < smallest2)
            smallest2 = array[i];
    }
    printf("%d %d\n", smallest1, smallest2);
    return 0;
}
