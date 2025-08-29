#include<stdio.h>
int main(){
    int i,j,num=5;

    for(i=1;i<=num;i++){
        for(j=1; j<=num;j++){
            if(j==1|| i==1|| j==num+1-i||i==num||j==num||j==i){
                printf(" * ");
            }
            else{
                printf("   ");
            }
        }
        printf("\n");
    }
}