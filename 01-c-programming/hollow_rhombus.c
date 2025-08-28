#include <stdio.h>
int main(){
    int num=5, i, j, k;

    for(i=0; i<num; i++){
       for(j=0; j<num-i-1; j++){
        printf(" ");
       }
       for(k=1; k<=num; k++){
        if(i==0 || k==1||i==num||k==num||i==num-1){
        printf(" *");
        }
        else{
            printf("  ");
        }
       }
       printf("\n");
    }
    return 0;
    
}