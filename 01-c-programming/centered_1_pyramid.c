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
}