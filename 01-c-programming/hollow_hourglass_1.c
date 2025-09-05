#include <stdio.h>
int main()
{
    int n = 5, j, i;

    for (i = n; i >= 1; i--)
    {
        for (j = 1; j <= n - i; j++)
        {
            printf("  ");
        }
        for (j = 1; j <= i; j++)
        {
            if (j == 1 || i == n)
            {
                printf("1 ");
            }
            else
            {
                printf("  ");
            }
        }
        for (j = i - 1; j >= 1; j--)
        {
            if (j == 1 || i == n)
            {
                printf("1 ");
            }
            else
            {
                printf("  ");
            }
        }
        printf("\n");
    }
    for (i = 2; i <= n; i++)
    {
        for (j = 1; j <= n - i; j++)
        {
            printf("  ");
        }
        for (j = 1; j <= i; j++)
        {
            if (j == 1 || i == n )
            {
                printf("1 ");
            }
            else
            {
                printf("  ");
            }
        }
        for (j = i - 1; j >= 1; j--)
        {
            if (j == 1 || i == n)
            {
                printf("1 ");
            }
            else
            {
                printf("  ");
            }
        }
        printf("\n");
    }
}