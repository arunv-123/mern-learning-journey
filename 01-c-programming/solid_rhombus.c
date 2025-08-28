#include <stdio.h>
int main(){
    int num, i, j, k;
    printf("Enter number: ");
    scanf("%d",&num);

    for(i=0; i<num; i++){
       for(j=0; j<num-i-1; j++){
        printf(" ");
       }
       for(k=1; k<=num; k++){
        printf("*");
       }
       printf("\n");
    }
    return 0;
    
}