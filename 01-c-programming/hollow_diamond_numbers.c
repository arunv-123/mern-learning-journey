#include <stdio.h>
int main()
{
    int n=5, i, j;
    for(i=1; i<=n; i++)
    {
        //outer space
        for(j=1; j<=n-i; j++)
        {
            printf(" ");
        }
        //1
        printf("1");
        
        //inner space
        for(j=1;j<=2*(i-2)+1; j++)
        {
            printf(" ");
        }
        
        //2,3,4,5
        if(i!=1)
        {
        printf("%d", i);
        }
        
        printf("\n");
    }
    
    for (i=n-1; i>=1; i--)
    {
        for(j=i; j <= n-1; j++)
        {
            printf(" ");
        }
        printf("1");
        
        for(j = 1; j <= 2*(i-2)+1; j++)
        {
            printf(" ");
        }
        if(i!=n && i != 1)
        {
            printf("%d",i);
        }
        
        printf("\n");

    }
}