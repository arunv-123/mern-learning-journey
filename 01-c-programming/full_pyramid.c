#include <stdio.h>
int main(){
    int num, i, j, k;
    
    printf("Enter the number: ");
    scanf("%d", &num);

    for(i=1; i<=num; i++){
        for(j=1; j<=i; j++){
        printf(" ");
        }
        for(k = i; k<=num; k++){
        printf(" *");
        }
        printf("\n");
    }
    
}