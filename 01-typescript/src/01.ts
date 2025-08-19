type TID = number | string;
type TDepartment = "Engineering" | "HR" | "Design";

interface IUser {
  readonly id: TID;
  userName: string;
  email: string;
  description?: string;
}

const userData: IUser = {
  id: "22332",
  userName: "ali-reza",
  email: "sadd@gmail.com",
  // description:"ssssssssss"
};

interface IPerson {
  name: string;
  age: number;
}

interface IEmployee {
  employeeId: TID;
  department: TDepartment;
}

type EmployeePerson = IPerson & IEmployee;
const developer: EmployeePerson = {
  name: "Saeed",
  age: 22,
  employeeId: "dev-001",
  department: "HR",
};
