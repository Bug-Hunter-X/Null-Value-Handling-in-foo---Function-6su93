function foo(a, b) {
  if (a === null || b === null) {
    console.warn('Null values passed to foo(). Returning default value.');
    return 0; // or handle the null appropriately 
  }
  // ...
}