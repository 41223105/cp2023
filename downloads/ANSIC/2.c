#include <stdio.h>
//4
int main() 
{
    // Declare and initialize character variables
    char char1 = 'E';
    char char2 = 'F';
    char char3 = 'G';

    // Print the original and reversed characters
    printf("The reverse of %c%c%c is %c%c%c\n",
        char1, char2, char3,
        char3, char2, char1);

    return(0);
}