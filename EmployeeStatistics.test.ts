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

beforeEach(()=>{
    stats = new EmployeeStatistics(employees);
})

test("konstruktor", ()=>{
    expect(()=>new EmployeeStatistics([{name: "asd", age: 25, salary: 1000}])).not.toThrow();
    expect(()=>new EmployeeStatistics([])).toThrow();
})