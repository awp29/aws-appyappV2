import PageHeader from "@/components/page/pageHeader";
import DefaultLayout from "@/layouts/default";
import React from "react";
import { Breadcrumbs, BreadcrumbItem } from "@heroui/breadcrumbs";
import { NavLink } from "react-router-dom";
import { Divider } from "@heroui/divider";
import { Form } from "@heroui/form";
import { Button } from "@heroui/button";
import { Input, Textarea } from "@heroui/input";
import { useForm } from "react-hook-form";
import { DatePicker } from "@heroui/date-picker";
import { Select, SelectItem } from "@heroui/select";
import { createEmployee } from "./api";
import { useMutation } from "@tanstack/react-query";
import { Employee } from "@/types";

const roles = [
  { key: "customerSupport", label: "Customer Support" },
  { key: "dataScientist", label: "Data Scientist" },
  { key: "designer", label: "Designer" },
  { key: "devOpsEngineer", label: "Dev Ops Engineer" },
  { key: "hRManager", label: "HR Manager" },
  { key: "marketingSpecialist", label: "Marketing Specialist" },
  { key: "productManager", label: "Product Manager" },
  { key: "qAEngineer", label: "QA Engineer" },
  { key: "SalesRepresentative", label: "Sales Representative" },
  { key: "softwareEngineer", label: "Software Engineer" },
];

const teams = [
  { key: "astro", label: "Astro" },
  { key: "comet", label: "Comet" },
  { key: "galaxy", label: "Galaxy" },
  { key: "nebula", label: "Nebula" },
  { key: "rocket", label: "Rocket" },
];

const AddEmployeePage: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Employee>();

  const createEmployeeMutation = useMutation({
    mutationFn: createEmployee,
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

      <Divider className="mb-12" />

      <Form
        className="max-w-lg"
        onSubmit={handleSubmit((data) => {
          createEmployeeMutation.mutate(data);
        })}
      >
        <div className="flex flex-col gap-8 w-full mb-12">
          <Input {...register("firstName")} label="First name" size="sm" />
          <Input {...register("lastName")} label="Last name" size="sm" />

          {/* AP-TODO: Need to hook this up */}
          <DatePicker
            className="w-56"
            label="Date of birth"
            showMonthAndYearPickers
            size="sm"
          />

          <Input {...register("email")} label="Email" size="sm" />

          <Select
            {...register("team")}
            className="w-56"
            label="Team"
            size="sm"
            items={teams}
          >
            {(team) => <SelectItem>{team.label}</SelectItem>}
          </Select>

          <Select
            {...register("role")}
            className="w-56"
            label="Role"
            size="sm"
            items={roles}
          >
            {(role) => <SelectItem>{role.label}</SelectItem>}
          </Select>

          <Textarea {...register("notes")} label="Notes" size="sm" />
        </div>

        <div className="flex gap-4">
          <Button
            color="primary"
            type="submit"
            isLoading={createEmployeeMutation.isPending}
          >
            Submit
          </Button>
          <Button type="reset" variant="bordered">
            Reset
          </Button>
        </div>
      </Form>
    </DefaultLayout>
  );
};

export default AddEmployeePage;
