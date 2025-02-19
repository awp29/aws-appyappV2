import { generateClient } from "aws-amplify/api";
import { Schema } from "../../../amplify/data/resource";

// AP-TODO: How do I work with this? Do I create it once as a global and import it everywhere?
const client = generateClient<Schema>();

export const deleteEmployee = async (employeeId: string) => {
  return await client.models.Employee.delete({ id: employeeId });
};
