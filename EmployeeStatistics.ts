import type {Employee} from "./Employee.js";

export class EmployeeStatistics {
    employees: Employee[] = [];

    constructor(employees: Employee[]) {
        if (employees.length == 0) {
            throw new Error("A dolgozók listája nem lehet üres");
        }
        this.employees = employees;
    }
}