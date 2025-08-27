#include<stdio.h>
int main(){
    int num1, sum=0;
    printf("enter number: ");
    scanf("%d",&num1);
    for(int i=1; i<=num1; i++){
        sum += i;
        
    }
    printf("%d ",sum);
    
}
