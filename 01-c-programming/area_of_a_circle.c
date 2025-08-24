#include <stdio.h>
int main(){
    float r, area;

    printf("Radius of the circle:");
    scanf("%f", &r);

    area = 3.14159*r*r;

    printf("Area of the circle is %f", area);

}