#include <stdio.h>
int main()
{
    int n1;
        
    printf("Enter a number:");
    scanf("%d", &n1);

    if(n1%2==0 && n1>100){
        printf("%d is even and greater than 100", n1);
    }
    else if(n1%2==0 && n1<=100){
        printf("%d is even but not greater than 100", n1);
    }
    else if(n1%2!=0 && n1>100){
        printf("%d is not even but greater than 100", n1);
    }
    else{
        printf("%d is not even and not greater than 100", n1);

    }
}