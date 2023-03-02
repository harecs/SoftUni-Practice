class Company {
    constructor() {
        this.departments = {};
    }

    addEmployee(name, salary, position, department) {
        let input = [name, salary, position, department];

        if (input.some(x => x === '' || x === undefined || x === null)) { // === or ==
            throw new Error('Invalid input!');
        }

        if (salary < 0) {
            throw new Error('Invalid input!');
        }

        let employeeObject = {
            name: name,
            salary: salary,
            position: position
        };

        if (!this.departments.hasOwnProperty(department)) {
            this.departments[department] = [];
        }

        this.departments[department].push(employeeObject);

        return `New employee is hired. Name: ${name}. Position: ${position}`;
    }

    bestDepartment() {
        let averageSalaries = {};

        for (const key in this.departments) {
            let averageSalary = this.departments[key]
                .reduce(((a, x) => a += x.salary), 0);

            averageSalaries[key] = averageSalary;
        }

        Object.entries(averageSalaries).sort((a, b) => b[1] - a[1]);

        let bestDepartmentName = Object.keys(averageSalaries)[0];
        let sortedEmployeesInDepartment = this.departments[bestDepartmentName]
            .slice()
            .sort((a, b) => {
                if (b.salary > a.salary) {
                    return 1;
                }
                if (b.salary < a.salary) {
                    return -1;
                }

                if (a.name.localeCompare(b.name)) {
                    return -1;
                } else {
                    return 1;
                }
            });

        let output = `Best Department is: ${bestDepartmentName}\n`;
        output += `Average salary: ${(averageSalaries[bestDepartmentName] / Object.keys(this.departments[bestDepartmentName]).length).toFixed(2)}`;

        for (const currentEmployeeObject of sortedEmployeesInDepartment) {
            output += `\n${currentEmployeeObject.name} ${currentEmployeeObject.salary} ${currentEmployeeObject.position}`;
        }

        return output;
    }
}