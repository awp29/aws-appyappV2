import PageHeader from "@/components/page/pageHeader";
import DefaultLayout from "@/layouts/default";
import { Input } from "@heroui/input";
import { Button } from "@heroui/button";
import clsx from "clsx";
import { useMutation, useQuery } from "@tanstack/react-query";
import { generateClient } from "aws-amplify/data";
import type { Schema } from "../../../amplify/data/resource";
import { useNavigate } from "react-router-dom";
import { deleteEmployee } from "./api";

const client = generateClient<Schema>();

const getEmployees = async () => {
  return await client.models.Employee.list();
};

const EmployeesPage = () => {
  const listEmployeesQuery = useQuery({
    queryKey: ["listEmployees"],
    queryFn: getEmployees,
  });

  const deleteEmployeeMutation = useMutation({
    mutationFn: deleteEmployee,
    onSuccess: () => listEmployeesQuery.refetch(),
  });

  const navigate = useNavigate();

  return (
    <DefaultLayout>
      <PageHeader>
        <div>
          <PageHeader.Title>Employees</PageHeader.Title>
          <PageHeader.Description>
            Coming soon, probably... 🚧
          </PageHeader.Description>
        </div>

        <Button color="primary" onPress={() => navigate("/employees/add")}>
          Add employee
        </Button>
      </PageHeader>

      <div>
        <Input
          className={clsx("w-60")}
          size="sm"
          placeholder="Type to search"
        />
      </div>

      {listEmployeesQuery.data && (
        <ul className="mt-6">
          {listEmployeesQuery.data.data.map((employee) => (
            <li className="flex gap-3" key={employee.id}>
              <span>{employee.firstName}</span>
              <span>{employee.email}</span>

              <Button
                color="primary"
                variant="flat"
                size="sm"
                onPress={() => navigate(`/employees/edit/${employee.id}`)}
              >
                Edit
              </Button>

              <Button
                variant="flat"
                size="sm"
                isLoading={deleteEmployeeMutation.isPending}
                onPress={() => deleteEmployeeMutation.mutate(employee.id)}
              >
                delete
              </Button>
            </li>
          ))}
        </ul>
      )}
    </DefaultLayout>
  );
};

export default EmployeesPage;
