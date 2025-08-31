#include <stdio.h>
int main(){
    int i,j,k,num=4;

    for(i=num; i>=1; i--){
        for(j=1; j<=i; j++){
            printf(" ");
        }
        for(k=i; k<=num; k++){
        printf(" *");
        }
        printf("\n");
    }
    for(i=2; i<=num; i++){
        for(j=1; j<=i; j++){
            printf(" ");
        }
        for(k=i; k<=num; k++){
        printf(" *");
        }
        printf("\n");
    }
}