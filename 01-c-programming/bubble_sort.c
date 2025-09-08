#include <stdio.h>
int main()
{
    int n = 5, i, j, temp=0,k;
    int array[5] = {1, 2, 9, 6, 5};
    for (i = 0; i < n; i++)
    {
        for (j = 0; j <= n - i - 1; j++)
        {
            if (array[j] > array[j + 1])
            {
                temp = array[j];
                array[j] = array[j+1];
                array[j+1]=temp;
            }
        }
        
    }

    for (k = 0; k < n; k++)
        {
        printf("%d\t", array[k]);
        }
}