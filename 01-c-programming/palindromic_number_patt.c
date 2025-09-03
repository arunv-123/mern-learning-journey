#include <stdio.h>
int main()
{
int n = 5; // Number of rows
for(int i = 1; i <= n; i++) {
    // 1. Print outer spaces
    for(int j = 1; j <= n - i; j++)
        printf("  ");

    // 2. Print first number and increasing numbers
    for(int j = i; j <= 2*i - 1; j++)
        printf("%d ", j);

    // 3. Print decreasing numbers
    for(int j = 2*i - 2; j >= i; j--)
        printf("%d ", j);

    // 4. Move to next row
    printf("\n");
}
}