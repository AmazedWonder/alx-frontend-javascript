export default function createReportObject(employeesList) {
  return {
    allEmployees: {
      ...employeesList, // Spread the employeesList into the allEmployees object
    },
    getNumberOfDepartments() {
      return Object.keys(this.allEmployees).length; // Return the count of departments
    },
  };
}
