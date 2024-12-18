```javascript
// Correct transaction handling
database.ref('counter').transaction(current => {
  if (current === null) {
    return 1; // Initialize if counter doesn't exist
  } else {
    return current + 1; 
  }
});
```