import type {Employee} from "./Employee.js";

export class EmployeeStatistics {
    employees: Employee[] = [];

    constructor(employees: Employee[]) {
        if (employees.length == 0) {
            throw new Error("A dolgozók listája nem lehet üres");
        }
        this.employees = employees;
    }

    getMaxSalary(): number {
        let max = this.employees[0]!.salary;
        this.employees.forEach(element => {
            if (element.salary > max) {
                max = element.salary;
            }
        });

        return max;
    }

    getAverageAge(): number {
        let sum = 0;
        this.employees.forEach(element => {
            sum += element.age;
        });

        return sum/this.employees.length;
    }

    getHighestPaidEmployee(): Employee {
        return this.employees.find(e => e.salary == this.getMaxSalary())!;
    }
}