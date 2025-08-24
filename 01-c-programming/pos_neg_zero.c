#include <stdio.h>
int main()
{
    int n1;
  
    printf("Enter first number:");
    scanf("%d", &n1);

    if(n1>0){
        printf("%d is positive", n1);
    }
    else if(n1<0){
        printf("%d is negative", n1);
    }
    else{
        printf("%d is zero", n1);

    }
}