## Exercise: Create an Array Manipulation Utility

Create a JavaScript function called arrayManipulator that takes two arguments:

1. An input array of numbers.
2. A configuration object that specifies the operations to perform on the array.

The configuration object should have the following properties:

- add: An array of numbers to add to the input array.
- subtract: An array of numbers to subtract from the input array.
- multiply: A number to multiply every element in the input array by.
- divide: A number to divide every element in the input array by.

The function should return a new array after applying the specified operations in the order they are given in the configuration object.

Example:

```javascript
const inputArray = [1, 2, 3, 4];

const config = {
  add: [10, 20],
  subtract: [5],
  multiply: 2,
  divide: 3,
};

const result = arrayManipulator(inputArray, config);
// result should be [((1 + 10) - 5) * 2 / 3, ((2 + 10) - 5) * 2 / 3, ((3 + 10) - 5) * 2 / 3, ((4 + 10) - 5) * 2 / 3]
```
