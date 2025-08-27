#include<stdio.h>
int main(){
    int num;
    printf("Print odd numbers from 1 to: ");
    scanf("%d",&num);

    for(int i=1; i<=num; i++){
        if(i%2!=0){
        printf("%d",i);
        }
        printf("\n");
    }
}
