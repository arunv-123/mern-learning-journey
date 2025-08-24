#include <stdio.h>
int main(){
    int n1, n2, n3;
    float avg;

    printf("Enter first number: ");
    scanf("%d", &n1);

    printf("Enter second number: ");
    scanf("%d", &n2);

    printf("Enter third number: ");
    scanf("%d", &n3);

    avg = (n1+n2+n3)/3.0;

    printf("Average of three numbers given is %f", avg);
}