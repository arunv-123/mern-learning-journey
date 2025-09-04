#include <stdio.h>
int main()
{
    int n = 5, j, k, i;

    for (i = 0; i < n; i++)
    {
        for (j = 1; j <= n - (i + 1); j++)
        {
            printf("  ");
        }
        for (j = i + 1; j >= 1; j--)
        {
            printf("%d ", j);
        }
        for (j = 2; j <= i + 1; j++)
        {
            printf("%d ", j);
        }
        printf("\n");
    }

    for (i = n - 1; i >= 1; i--)
    {
        for (j = 1; j <= n-i; j++)
        {
            printf("  ");
        }
        for (j = i; j >= 1; j--)
        {
            printf("%d ", j);
        }
        for (j = 2; j <= i; j++)
        {
            printf("%d ", j);
        }
        printf("\n");
    }
}