#include <stdio.h>
//right star pyramid
int main()
{
    for(int i=1; i<=5; i++){
        for(int j=1; j<=i; j++){
            printf("* ");
        }
        printf("\n");
    }

printf("\n");


//inclined right pyramid
   for(int i=5; i>=1; i--){
        for(int j=i; j>=1; j--){
            printf("* ");
        }
        printf("\n");
}
    

printf("\n");


//inclined right pyramid-method 2
 for(int i=1; i<=5; i++){
        for(int j=i; j<=5; j++){
            printf("* ");
        }
        printf("\n");
}
}