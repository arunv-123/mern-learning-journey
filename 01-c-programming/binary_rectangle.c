#include<stdio.h>
int main(){
    int num,i,j,row=4,col=9;

    printf("Enter a number:");
    scanf("%d",&num);

    for(i=1;i<=row;i++){
        for(j=1;j<=col;j++){
            if(i==1 || i==row || j==1 || j==col ){
                printf("0 ");
            }else{
                printf("1 ");
            }
        }
        printf("\n");
    }
}