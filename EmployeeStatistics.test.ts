import { beforeEach, expect, test } from "vitest";
import { EmployeeStatistics } from "./EmployeeStatistics.js";
import type {Employee} from "./Employee.js";

let stats: EmployeeStatistics;
const employees: Employee[] = [
  {
    name: "Alice Johnson",
    age: 28,
    salary: 45000
  },
  {
    name: "Bob Smith",
    age: 35,
    salary: 60000
  },
  {
    name: "Charlie Brown",
    age: 42,
    salary: 75000
  },
  {
    name: "Diana Prince",
    age: 30,
    salary: 52000
  },
  {
    name: "Ethan Hunt",
    age: 38,
    salary: 68000
  }
];

let stats2: EmployeeStatistics;
const employees2: Employee[] = [
  {
    name: "Fiona Gallagher",
    age: 26,
    salary: 48000
  },
  {
    name: "George Miller",
    age: 50,
    salary: 82000
  },
  {
    name: "Hannah Lee",
    age: 33,
    salary: 59000
  },
  {
    name: "Ivan Petrov",
    age: 41,
    salary: 71000
  },
  {
    name: "Julia Novak",
    age: 29,
    salary: 53000
  }
];

beforeEach(()=>{
    stats = new EmployeeStatistics(employees);
    stats2 = new EmployeeStatistics(employees2);
})

test("konstruktor", ()=>{
    expect(()=>new EmployeeStatistics([{name: "asd", age: 25, salary: 1000}])).not.toThrow();
    expect(()=>new EmployeeStatistics([])).toThrow();
})

test("getMaxSalary()", ()=>{
    expect(stats.getMaxSalary()).toBe(employees[2]!.salary);
    expect(stats2.getMaxSalary()).toBe(employees2[1]!.salary);
})

test("getAverageAge():", ()=> {
    expect(stats.getAverageAge()).toBeCloseTo(34.6);
    expect(stats2.getAverageAge()).toBeCloseTo(35.8);
})