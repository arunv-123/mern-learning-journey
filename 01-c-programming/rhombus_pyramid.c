#include <stdio.h>
int main(){
    int num, i, j, k;
    
    printf("Enter the number: ");
    scanf("%d", &num);

    for(i=0; i<num; i++){
       for(j=0; j<i; j++){
        printf(" ");
       }
       for(k=1; k<=num; k++){
        printf("*");
       }
       printf("\n");
    }
    
}