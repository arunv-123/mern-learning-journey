#include <stdio.h>
int main()
{
    int n = 5, i, j, k;

    for (i = 1; i <= n; i++)
    {
        for (j =  i; j < n; j++)
        {
            printf(" ");
        }
            printf("*");
        
        
        for (k = 1; k <= 2*(i-1)-1/*important*/; k ++)
        {
            printf(" ");
        }

        if(i != 1)
        {
            printf("*");
        }

        printf("\n");
        
        
    }
    //bottom half
    for (i = 2; i <= n; i++)
    {
        for (j = 1; j < i; j++ )
        {
            printf(" ");
        }
        printf("*");

        for (k = 1; k <= 2*(n-i)-1; k++)
        {
            printf(" ");
        }
    
        if(i !=n)
        {
            printf("*");
        }

        printf("\n");
    }

}