function listEmployees(employees) {
    
    class Employee {
        constructor(name) {
            this.name = name;
            this.personalNumber = name.length;
        }
    }

    let employeesAsObjects = [];

    for (const name of employees) {
        let currentEmpleyee = new Employee(name);
        employeesAsObjects.push(currentEmpleyee);
    }

    for (const employee of employeesAsObjects) {
            console.log(`Name: ${employee.name} -- Personal Number: ${employee.personalNumber}`);
    }
}