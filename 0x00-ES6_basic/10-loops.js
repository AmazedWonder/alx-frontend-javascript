export default function appendToEachArrayValue(array, appendString) {
  const result = []; // Create a new array to store results

  for (const value of array) { // Use for...of to iterate over values
    result.push(appendString + value); // Append the modified value to the new array
  }

  return result; // Return the new array
}
