#include <stdio.h>
int main()
{
    int x;
        
    printf("Enter a number:");
    scanf("%d", &x);

    if(x>=1 && x<=100){
        printf("%d is between 1 and 100", x);
    }
    else{
        printf("%d isnot between 1 and 100", x);
    }
}