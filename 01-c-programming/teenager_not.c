#include <stdio.h>
int main()
{
    int age;
        
    printf("Enter age:");
    scanf("%d", &age);

    if(age>=13 && age<=17){
        printf("He/ She is a Teenager");
    }
    else{
        printf("He/ She is not a Teenager");
    }
}