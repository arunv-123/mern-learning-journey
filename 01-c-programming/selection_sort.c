#include <stdio.h>
int main()
{
    int n=5, i, j, temp=0,k;
    int array[5]={4,1,6,2,9};
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