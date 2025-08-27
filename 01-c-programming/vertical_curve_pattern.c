#include <stdio.h>
int main(){
    int num, i, j,k;
    
    printf("Enter the number: ");
    scanf("%d", &num);

    for(i=1; i<=num; i++){
        for(j=1; j<=i; j++){
        printf("*");
        }
        printf("\n");
    }
        for(i=num; i>=1; i--){
            for(j=1; j<=i; j++){
        printf("*");
        }
        printf("\n");
    }

}