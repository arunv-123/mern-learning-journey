#include <stdio.h>
int main() {
    float num1, num2, result;
    char op;

    printf("Enter first number: ");
    scanf("%f", &num1);

    
    printf("Enter second number: ");
    scanf("%f", &num2);
    
    printf("Choose an operation (+, -, *, /): ");
    scanf(" %c", &op);
    
    switch (op) {
        case '+':
            result = num1 + num2;
            printf("Result = %.2f\n", result);
            break;
        case '-':
            result = num1 - num2;
            printf("Result = %.2f\n", result);
            break;
        case '*':
            result = num1 * num2;
            printf("Result = %.2f\n", result);
            break;
        case '/':
            if (num2 != 0)
                result = num1 / num2;
            else {
                printf("Error: Division by zero not allowed.\n");
                return 1;
            }
            printf("Result = %.2f\n", result);
            break;
        default:
            printf("Invalid operator!\n");
    }

    return 0;
}