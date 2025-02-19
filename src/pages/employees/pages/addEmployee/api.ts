import { client } from "@/client";
import { Employee } from "@/types";

export const createEmployee = async (employee: Employee) => {
  return await client.models.Employee.create(employee);
};
