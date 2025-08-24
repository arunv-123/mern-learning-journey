#include <stdio.h>
int main()
{
    int n1, n2;
    
    printf("Enter two numbers:");
    scanf("%d %d", &n1, &n2);

    if(n1>50 || n2>50){
        printf("Atleast one number is greater than 50");
    }
    else{
        printf("Both are less than 50");
    }
}