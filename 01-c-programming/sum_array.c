#include <stdio.h>
int main()
{
    int i, n, k, sum=0;
    printf("Enter the size: ");
    scanf("%d", &n);
    int array[n];
    printf("Enter the elements:\n");
    for (i = 0; i < n; i++)
    {
        scanf("%d", &array[i]);
        sum += array[i];
    }

        printf("Sum of elements is%d", sum);
}