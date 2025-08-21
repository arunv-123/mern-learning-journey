#include <stdio.h>
int main() {
    float P, R, n, SI;
    printf("Enter the Principal amount (P): ");
    scanf("%f", &P);
    printf("Enter the Rate of Interest (R): ");
    scanf("%f", &R);
    printf("Enter the Time in years (n): ");
    scanf("%f", &n);
    SI = (P * R * n) / 100;
    printf("The Simple Interest is: %.2f\n", SI);
    return 0;
}
