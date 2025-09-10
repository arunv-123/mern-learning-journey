#include <stdio.h>
int main()
{
    int n, i, j, temp=0,k;
    printf("Enter the size: ");
    scanf("%d",&n);
    int array[n];
    printf("Enter the elements:\n");
    for (i=0; i<n; i++)
    {
    scanf("%d",&array[i]);
    }
    for (i=0; i<n; i++)
    {
        for (j=i+1; j<n; j++)
        {
            if(array[i]>array[j])
            {
                temp=array[i];
                array[i]=array[j];
                array[j]=temp;
            }
        }
    }
    for(k=0; k<n; k++){
    printf("%d ",array[k]);
    }
}