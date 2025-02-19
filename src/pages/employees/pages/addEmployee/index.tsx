import PageHeader from "@/components/page/pageHeader";
import DefaultLayout from "@/layouts/default";
import React from "react";
import { Breadcrumbs, BreadcrumbItem } from "@heroui/breadcrumbs";
import { NavLink, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { createEmployee } from "./api";
import EmployeeForm from "../components/employeeForm";

const AddEmployeePage: React.FC = () => {
  const naigate = useNavigate();

  const createEmployeeMutation = useMutation({
    mutationFn: createEmployee,
    onSuccess: () => {
      naigate("/employees");
    },
  });

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
          <BreadcrumbItem>Add</BreadcrumbItem>
        </Breadcrumbs>

        <div>
          <PageHeader.Title>Add Employee</PageHeader.Title>
          <PageHeader.Description>
            Add a new employee to the system
          </PageHeader.Description>
        </div>
      </PageHeader>

      <EmployeeForm
        onSubmit={(data) => createEmployeeMutation.mutate(data)}
        isLoading={createEmployeeMutation.isPending}
      />
    </DefaultLayout>
  );
};

export default AddEmployeePage;
