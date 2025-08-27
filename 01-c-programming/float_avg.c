#include <stdio.h>
int main(){

    float a,b,c,avg;

    printf("enter 3 number");
    scanf("%f %f %f",&a,&b,&c);

    avg = a+b+(c/3);

    printf(" sum = %f",avg);

    return 0;
}