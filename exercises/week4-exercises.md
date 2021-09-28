## Practice with Malloc

Give students practice with `malloc` and `free`, allocating memory dynamically, storing data in that memory, and then freeing memory when done with it.

## Concatenate

Write a function `concatenate` that takes two strings and returns a concatenated version of the two strings.

## Copy

In `copy.c`, write a program that copies a text file. Users should be able to run `./copy file1 file2` to copy the contents of text file `file1` into file `file2`.

### Caesar (revisited), Uppercase, etc.

If you've already done `copy.c`, these are some good exercise to have students do on their own, since it involves just adding a little in addition to `copy.c`:

- In `uppercase.c`, write a program that takes a file, and generates a new file that converts all of the letters in the original file to uppercase.
- In `caesar.c`, write a program that takes a file, and generates a new file that shifts all of the letters in the original file by 1.

## GIF Detection

Write a program `gif.c` that checks if a file (likely) a GIF (specifically, a GIF 89a file, the latest version of the GIF file format). Note that the first six characters of a GIF 89a file are the characters `G`, `I`, `F`,  `8`, `9`, `a`.
