#include <stdio.h>
int main()
{
    int n=5, i, j, even=0, odd=1; 
    for (i=1; i <= n; i++)
    {
        for(j=1; j<=i; j++)
        {
            if(i==1){
                printf("1");
            }
                else{
                    if(i%2==0)
                {
                even = even+2;
                printf("%d ",even);
            }
            else{
                odd=odd+2;
                printf("%d ",odd);
                
            }
        }
    }
        printf("\n");
    }
}