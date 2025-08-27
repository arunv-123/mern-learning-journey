#include <stdio.h>
int main()
{
    int num1;
    printf("enter number: ");
    scanf("%d", &num1);

    int square = num1 * num1;
    printf("Square of %d:%d", num1, square);
    int cube = num1 * num1 * num1;
    printf("\nCube of %d:%d", num1, cube);
}
