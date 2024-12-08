# Null Value Handling in foo() Function

This repository demonstrates a common bug in JavaScript related to handling null values.  The `foo()` function does not explicitly handle cases where either `a` or `b` is null, leading to potential issues.

## Bug Description
The `foo()` function is expected to perform some operation using the values of `a` and `b`. However, if either `a` or `b` is null, the function might throw an error or produce unexpected results.

## Solution
The solution involves explicitly checking for null values before using them in the function and handling them appropriately, such as returning a default value or throwing a more informative error message.