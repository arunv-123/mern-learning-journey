#include <stdio.h>
    int main(){
        int num=5,i,j,k;

        // printf("enter the number");
        // scanf("%d",&num);

    for (i=1;i<=num;i++)
    {
        for (j=1;j<=i;j++)
        {
            printf(" ");
        }
        printf("*");

        for(k=1;k<=2*(num-i)-1;k++)
        {
            printf(" ");
        }
        if (i!=num)
        {
            printf("*");
        }
        
        printf("\n");
    }
        for (i=num;i>=1;i--)
        {
            for(j=1;j<=i;j++){

            printf(" ");
        
        }
        printf("*");
    for(k=1;k<=2*(num-i)-1;k++)
    {
        printf(" ");
    }
    if (i!=num)
    {
    printf("*");
    }

    printf("\n");

        }
        
    }