import { client } from "../../client";

export const deleteEmployee = async (employeeId: string) => {
  return await client.models.Employee.delete({ id: employeeId });
};
