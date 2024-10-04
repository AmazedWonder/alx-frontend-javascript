export default function iterateThroughObject(reportWithIterator) {
  const employeeNames = []; // Array to hold employee names

  // Loop through the iterator and push each name to the array
  for (const employee of reportWithIterator) {
    employeeNames.push(employee);
  }

  // Join the employee names with ' | ' and return the resulting string
  return employeeNames.join(' | ');
}
