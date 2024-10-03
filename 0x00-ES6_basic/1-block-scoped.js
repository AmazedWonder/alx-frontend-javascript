export default function taskBlock(trueOrFalse) {
  let task = false; // Changed var to let
  let task2 = true; // Changed var to let

  if (trueOrFalse) {
    task = true; // No var or let needed here, just assign
    task2 = false; // No var or let needed here, just assign
  }

  return [task, task2];
}
