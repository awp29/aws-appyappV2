import { client } from "../../client";

export const getEmployees = async () => {
  return await client.models.Employee.list();
};

export const deleteEmployee = async (employeeId: string) => {
  return await client.models.Employee.delete({ id: employeeId });
};
