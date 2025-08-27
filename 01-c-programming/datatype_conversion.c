#include <stdio.h>
int main(){

    float a;

    printf("enter a decimal: ");
    scanf("%f",&a);

    // printf("%d",(int)a);

    // return 0;

    int conversion = (int)a; //using (int)variable_name
    printf("%d",conversion);
}