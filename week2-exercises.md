## Section Exercises

### Reverse

Write a program `reverse.c` that takes a string as input, and reverses it.

- Topics
    - Accessing characters in a string
    - Writing more complex `for` loops
- Sample Usage

    ```bash
    $ ./reverse
    Text: This is CS50.
    Reverse: .05SC si sihT
    ```

- Sample Solution

    ```c
    #include <cs50.h>
    #include <ctype.h>
    #include <stdio.h>
    #include <string.h>

    int main(void)
    {
        string s = get_string("Text: ");

        // Loop through string in reverse order
        for (int i = strlen(s) - 1; i >= 0; i--)
        {
            printf("%c", s[i]);
        }

        printf("\n");
    }
    ```

### Addition

Write a program `addition.c` that adds two numbers provided as command-line arguments.

- Details
    - The program should accept two integers as command-line arguments.
    - The program should output both original numbers, and their sum. If the program is run as `./additional 2 8`, for example, the output should be `2 + 8 = 10`.
    - If the incorrect number of command-line arguments is provided, the program should display an error and return with exit code 1.
- Topics
    - Exit codes
    - Command-line arguments
    - `atoi` to convert strings to integers.
- Sample Usage

    ```bash
    $ ./addition 2 8
    2 + 8 = 10
    ```

    ```bash
    $ ./addition 2
    Usage: ./addition x y
    ```

- Sample Solution

    ```c
    #include <cs50.h>
    #include <stdio.h>
    #include <stdlib.h>

    int main(int argc, string argv[])
    {
        if (argc != 3)
        {
            printf("Usage: ./addition x y\n");
            return 1;
        }

        int x = atoi(argv[1]);
        int y = atoi(argv[2]);

        printf("%i + %i = %i\n", x, y, x + y);

    }
    ```

### Palindrome

Write a program `palindrome.c` that takes a string as input, and determines whether it is a palindrome (the same backwards and forwards). This can often be a useful follow-up to `reverse.c`.

(A more-comfortable student variant on this problem is to detect palindromes while ignoring spaces, to identify palindromes like `taco cat`.)

- Topics
    - String manipulation
    - `for` loops
- Sample Usage

    ```bash
    $ ./palindrome
    Text: racecar
    PALINDROME
    ```

    ```bash
    $ ./palindrome
    Text: jellyfish
    NOT PALINDROME
    ```

- Sample Solution

    ```c
    #include <cs50.h>
    #include <ctype.h>
    #include <stdio.h>
    #include <string.h>

    int main(void)
    {
        string s = get_string("Text: ");

        bool palindrome = true;

        // Check characters from start and end
        for (int i = 0, len = strlen(s); i < len / 2; i++)
        {
            if (s[i] != s[len - 1 - i])
            {
                palindrome = false;
            }
        }

        // Print output
        if (palindrome)
        {
            printf("PALINDROME\n");
        }
        else
        {
            printf("NOT PALINDROME\n");
        }

    }
    ```

### Initials

Write a program `initials.c` that takes a user’s full name as input, and outputs their initials.

- Details
    - The program should accept a user’s name using `get_string`
    - Initials should all be printed as uppercase letters, even if the name contains lowercase letters
    - Students can assume that the user’s names will be separated by one space
- Topics
    - Combining loops and conditions
    - Accessing string characters and manipulating strings
    - Using `ctype.h` functions like `toupper`
- Sample Usage

    ```bash
    $ ./initials
    Name: David J. Malan
    DJM
    ```

- Sample Solution

    ```c
    #include <cs50.h>
    #include <ctype.h>
    #include <stdio.h>
    #include <string.h>

    int main(void)
    {
        string name = get_string("Name: ");

        // Keep track of whether to output next character
        bool output = true;

        // Loop over all characters in name
        for (int i = 0, len = strlen(name); i < len; i++)
        {
            // Check if we should output this character
            if (output == true)
            {
                printf("%c", toupper(name[i]));
                output = false;
            }

            // If we encounter a space, output the next character
            if (name[i] == ' ')
            {
                output = true;
            }
        }

        printf("\n");
    }
    ```

### Anagram

This problem is a **more comfortable** problem, and works best when students already have familiarity with arrays and strings.

Write a program `anagram.c` that takes two words as input, and determines whether the words are anagrams of one another.

- Details
    - If two words are an exact match (the strings are identical, ignoring case), the program should output `EXACT MATCH`.
    - If either word contains non-alphabetic characters, the program should output `Alphabetic characters only` and return 1.
    - Otherwise, if two words consist of only alphabetic characters, the program should check to see if the letters in the first word can be rearranged (ignoring case) to form the second word. If so, the program should print `ANAGRAM`; if not, the program should print `NOT ANAGRAM`.
- Sample Usage

    ```c
    $ ./anagram
    Word 1: listen
    Word 2: silent
    ANAGRAM
    ```

    ```c
    $ ./anagram
    Word 1: program
    Word 2: silent
    NOT ANAGRAM
    ```

    ```c
    $ ./anagram
    Word 1: program
    Word 2: program
    EXACT MATCH
    ```

    ```c
    $ ./anagram
    Word 1: this
    Word 2: cs50
    Alphabetic characters only.
    ```

- Sample Solution

    ```c
    #include <ctype.h>
    #include <cs50.h>
    #include <stdio.h>
    #include <string.h>
    #include <strings.h>

    #define ALPHASIZE 26

    int main(void)
    {
        string s1 = get_string("Word 1: ");
        string s2 = get_string("Word 2: ");

        if (!strcasecmp(s1, s2))
        {
            printf("EXACT MATCH\n");
            return 0;
        }

        int characters[ALPHASIZE] = {0};

        for (int i = 0, len = strlen(s1); i < len; i++)
        {
            if (isalpha(s1[i]))
            {
                characters[tolower(s1[i]) - 'a']++;
            }
            else
            {
                printf("Alphabetic characters only.");
                return 1;
            }
        }

        for (int i = 0, len = strlen(s2); i < len; i++)
        {
            if (isalpha(s2[i]))
            {
                characters[tolower(s2[i]) - 'a']--;
            }
            else
            {
                printf("Alphabetic characters only.");
                return 1;
            }
        }

        for (int i = 0; i < ALPHASIZE; i++)
        {
            if (characters[i])
            {
                printf("NOT ANAGRAM\n");
                return 0;
            }
        }

        printf("ANAGRAM\n");
    }
    ```
