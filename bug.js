The following code snippet demonstrates a common error when working with Firebase Realtime Database transactions.  It attempts to increment a counter but doesn't handle potential race conditions, leading to unexpected results:

```javascript
// Incorrect transaction handling
database.ref('counter').transaction(current => {
  return current + 1;
});
```