### Factorial

Write a recursive function `factorial` that takes an integer `n` and computes its factorial. (The factorial of 5, for example, is 5 * 4 * 3 * 2 * 1 = 120).

### Fibonacci

Write a recursive function `fib` that computes the `n`th Fibonacci number. The 0th Fibonacci number is 0, the 1st Fibonacci number is 1, and every subsequent Fibonacci number is sum of the two preceding Fibonacci numbers.
    
### Binary Search

Write a recursive function `search` that takes in four inputs, a `value` to search for, a sorted array of `values`, a `start` index, and an `end` index. The function should perform binary search, returning `true` if the number is found between the `start` and `end` index, and `false` otherwise.

- Distribution Code

```c
bool search(int value, int values[], int start, int end)
{
    // TODO
}
```

### Bubble Sort

Write a program `bubble.c` that sorts an array of integers using bubble sort.

- Distribution Code

    ```c
    #include <cs50.h>
    #include <stdio.h>

    int main(void)
    {
        // Get input
        int n = get_int("How many values? ");
        int values[n];
        for (int i = 0; i < n; i++)
        {
            values[i] = get_int("Value %i: ", i);
        }

        // TODO: sort numbers

        // Print sorted values
        for (int i = 0; i < n; i++)
        {
            printf("%i\n", values[i]);
        }
    }
    ```

### Selection Sort

Write a program `selection.c` that sorts an array of integers using selection sort.

- Distribution Code

    ```c
    #include <cs50.h>
    #include <stdio.h>

    int main(void)
    {
        // Get input
        int n = get_int("How many values? ");
        int values[n];
        for (int i = 0; i < n; i++)
        {
            values[i] = get_int("Value %i: ", i);
        }

        // TODO: sort numbers

        // Print sorted values
        for (int i = 0; i < n; i++)
        {
            printf("%i\n", values[i]);
        }
    }
    ```
