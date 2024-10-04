export default function createIteratorObject(report) {
  const employees = report.allEmployees; // Access the allEmployees property
  const employeesArray = []; // Array to hold all employees

  // Loop through each department and add employees to the array
  for (const department in employees) {
    if (Object.prototype.hasOwnProperty.call(employees, department)) { // Safe check 4  own property
      employeesArray.push(...employees[department]); // Spread the employees into the array
    }
  }

  // Return a generator function
  function* employeeGenerator() {
    for (const employee of employeesArray) {
      yield employee; // Yield each employee
    }
  }

  return employeeGenerator(); // Return the generator instance
}
