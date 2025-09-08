#include <stdio.h>
int main() {
    int n = 9; // length of the pattern
    int i, j;
    for (i = 1; i <= 3; i++) { // 3 rows for zig-zag pattern
        for (j = 1; j <= n; j++) {
            // Print star at positions where (i+j) % 4 == 0 or (i == 2 && j % 4 == 0)
            if (((i + j) % 4 == 0) || (i == 2 && j % 4 == 0)) {
                printf("*");
            } else {
                printf(" ");
            }
        }
        printf("\n");
    }
    return 0;
}