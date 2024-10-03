export default function taskBlock(trueOrFalse) {
  let task = false; // Use let so it can be reassigned
  let task2 = true; // Use let so it can be reassigned

  if (trueOrFalse) {
    task = false; // Update the outer variable
    task2 = true; // Update the outer variable
  }

  return [task, task2];
}
