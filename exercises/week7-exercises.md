
- Create a new database by running the command `touch students.db`
- Run sqlite by running `sqlite3 students.db`

### Creating Tables

```sql
-- people table
CREATE TABLE people (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL
);

-- courses (code and title)

-- students (id and course)

-- instructors (id and course)
```

### Inserting Into Tables
- Insert two data points into each table:

```sql
-- Add people
INSERT INTO people (name) VALUES ("Alice");

-- Add courses

-- Add instructors

-- Add students
```

### Using SELECT

- Write `SELECT` queries to answer these questions (Do the first 3, then move on the next part. If you have time, return to these and do the rest!)

```sql
-- What is Alice's student id?

-- What is the course title for CS51?

-- What are the course codes and titles for all of the CS courses?
-- (Assume that all CS courses have a course code that begins with 'CS')

-- How many courses are there?

-- How many students are taking CS50?

    -- First, do this in two steps:

    -- Then, combine into a single nested query:

    -- Then, show the same result from joining tables:

-- What are the names of all of the instructors? Generate a table with all instructors' names and the course they teach.

-- What are the names of all of the students taking CS50?

    -- First, do this using JOINs:

    -- Then, do this with nested queries:

```

### UPDATE and DELETE
- Write some `UPDATE` and `DELETE` queries.

```sql
-- Alice wants to switch from CS50 into CS51.

    -- First, do this as a multi-step process.
    
    -- Then, show nested query.

-- CS182 was cancelled.

```
