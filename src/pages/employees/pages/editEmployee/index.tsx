import React from "react";
import DefaultLayout from "@/layouts/default";
import PageHeader from "@/components/page/pageHeader";
import { Breadcrumbs, BreadcrumbItem } from "@heroui/breadcrumbs";
import { NavLink, useParams } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getEmployee, updateEmployee } from "./api";
import EmployeeForm from "../components/employeeForm";

const EditEmployeePage: React.FC = () => {
  const { employeeId } = useParams<{ employeeId: string }>();

  const queryClient = useQueryClient();

  const getEmployeeQuery = useQuery({
    queryKey: ["getEmployee", employeeId],
    queryFn: () => getEmployee(employeeId!),
  });

  const updateEmployeeMutation = useMutation({
    mutationFn: updateEmployee,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["getEmployee", employeeId] });
    },
  });

  if (getEmployeeQuery.data === undefined) {
    return null;
  }

  return (
    <DefaultLayout>
      <PageHeader withBreadcrumbs>
        <Breadcrumbs>
          <BreadcrumbItem>
            <NavLink to="/">Dashboard</NavLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <NavLink to="/employees">Employees</NavLink>
          </BreadcrumbItem>
          <BreadcrumbItem>Edit</BreadcrumbItem>
        </Breadcrumbs>

        <div>
          <PageHeader.Title>Edit Employee</PageHeader.Title>
          <PageHeader.Description>
            Modify the details of an existing employee in the system.
          </PageHeader.Description>
        </div>
      </PageHeader>

      <EmployeeForm
        defaultValues={getEmployeeQuery.data.data}
        onSubmit={(employee) => {
          updateEmployeeMutation.mutate(employee);
        }}
        isLoading={updateEmployeeMutation.isPending}
      />
    </DefaultLayout>
  );
};

export default EditEmployeePage;
