export default function guardrail(mathFunction) {
  const queue = []; // Step 2: Create an empty array named queue

  try {
    // Step 3: Try to execute the mathFunction and push the result to the queue
    const result = mathFunction();
    queue.push(result);
  } catch (error) {
    // Step 3: Catch any error and push the error message to the queue
    queue.push(`Error: ${error.message}`);
  } finally {
  // Step 4: Always add 'Guardrail was processed' to the queue
    queue.push('Guardrail was processed');
  }

  // Step 5: Return the queue array
  return queue;
}
