import { client } from "@/client";
import { Employee } from "@/types";

export const getEmployee = async (employeeId: string) => {
  return await client.models.Employee.get({ id: employeeId });
};

export const updateEmployee = async (employee: Employee) => {
  return await client.models.Employee.update(employee);
};
