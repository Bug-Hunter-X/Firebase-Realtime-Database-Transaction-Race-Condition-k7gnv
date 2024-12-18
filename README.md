# Firebase Realtime Database Transaction Race Condition

This repository demonstrates a common issue encountered when using Firebase Realtime Database transactions: race conditions leading to inaccurate counter updates. The `bug.js` file shows the incorrect implementation, while `bugSolution.js` provides the corrected version.

## Problem

When multiple clients attempt to increment a counter simultaneously using transactions without proper handling, the final counter value may be lower than expected due to race conditions.  The database may not apply all increments correctly.

## Solution

The solution uses a more robust approach by checking the current value within the transaction function and ensuring the update is based on this check. This avoids race conditions and guarantees consistent counter updates.