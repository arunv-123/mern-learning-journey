#include <stdio.h>
#include <math.h>

int main(){
    float n1,n2,rem,quot;

    printf("Enter divident: ");
    scanf("%f", &n1);

    printf("Enter dividor: ");
    scanf("%f", &n2);

    rem = fmod(n1, n2);
    quot = n1 / n2;

    printf("Reminder is %f", rem);
    printf("\nQuotient is %f", quot);

}