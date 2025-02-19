import { generateClient } from "aws-amplify/api";
import { Schema } from "../../../../../amplify/data/resource";
import { Employee } from "@/types";

// AP-TODO: How do I work with this? Do I create it once as a global and import it everywhere?
const client = generateClient<Schema>();

export const createEmployee = async (employee: Employee) => {
  return await client.models.Employee.create(employee);
};
