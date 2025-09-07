#include <stdio.h>

int main() {
    int n = 5; // number of rows
    int i, j, value, space;

    for (i = 0; i < n; i++) {
        // print leading spaces for triangle shape
        for (space = 0; space < n - i; space++) {
            printf("  ");
        }

        value = 1; // first value in every row is always 1
        for (j = 0; j <= i; j++) {
            printf("%d   ", value);

            // update value for next column
            value = value * (i - j) / (j + 1);
        }

        printf("\n");
    }

}
