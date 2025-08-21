#include<stdio.h>
int main(){

float grade;
printf("Enter you mark:");
scanf("%f",&grade);

if(grade>=90 && grade<=100 ){
    printf("your grade is A");
}else if(grade>=89 && grade<=80){
    printf("your grade is B");
}else if(grade>=79 && grade<=70){
    printf("your grade is C");
}else if(grade>=69 && grade<=60){
    printf("your grade is D");
}else if(grade>=50 && grade<=59){
    printf("your grade is E");
}else if(grade>100){
    printf("enter the mark below 100");
}else
printf("failed");
}