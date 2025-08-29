#include<stdio.h>
int main(){
    int i,j,num=5;

    for(i=1;i<=num;i++){
        for(j=1; j<=num;j++){
            if(i==1||i==j||j==num){
                printf(" *");
            }
            else{
                printf("  ");
            }
        }
        printf("\n");
    }
}