#include<stdio.h>
int main(){
    int i,j,num=5,a=1;

    for(i=1;i<=num;i++){
        for(j=1; j<=i;j++){
                printf("%d ",a);
                a++;
            }
        
        
        printf("\n");
    }
}