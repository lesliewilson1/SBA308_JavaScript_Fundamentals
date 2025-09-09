# Learner Grading Engine

This project calculates per-learner assignment scores, tracks total points earned vs. possible, and formats assignment breakdowns. It includes logic to skip invalid or placeholder data (e.g. assignments with due date `3000`) and avoids division errors using defensive checks.

## Features

- ✅ Tracks individual learner scores and total possible points
- ✅ Filters out assignments with placeholder due dates
- ✅ Calculates per-assignment ratios (score / possible)
- ✅ Formats output with assignment IDs and score ratios
- ✅ Beginner-friendly logic using plain loops and conditionals
- ✅ Optional `try...catch` blocks for safe error handling

## How It Works

1. Loops through assignment submissions
2. Checks for valid data (`score`, `possible`, `due`)
3. Initializes learner objects if needed
4. Adds scores and formats assignment breakdowns
5. Skips invalid entries using simple checks or `try...catch`

## Example Output
