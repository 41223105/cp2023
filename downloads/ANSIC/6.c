#include <stdio.h>
//26
int main() {
    int i; // Declare variable for loop counter

    printf("Even numbers between 1 to 95613 (inclusive):\n");

    for (i = 1; i <= 95613; i++) 
    {
        if(i%2 == 0) // Check if 'i' is even
        {
            printf("%d ", i); // Print 'i' if it's even
        }
    }

    return 0;
}
