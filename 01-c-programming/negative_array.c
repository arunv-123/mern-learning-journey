#include <stdio.h>
int main()
{
    int i, n, k;
    printf("Enter the size: ");
    scanf("%d",&n);
    int array[n];
    printf("Enter the elements:\n");
    for (i=0; i<n; i++)
    {
    scanf("%d",&array[i]);
    }

    for(k=0; k<n; k++){
        if(array[k]<0){
    printf("The negative element is %d ",array[k]);
    }
}
}