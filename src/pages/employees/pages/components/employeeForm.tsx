import React from "react";
import { useForm } from "react-hook-form";
import { Form } from "@heroui/form";
import { Button } from "@heroui/button";
import { Input, Textarea } from "@heroui/input";
import { DatePicker } from "@heroui/date-picker";
import { Select, SelectItem } from "@heroui/select";
import { Employee } from "@/types";
import clsx from "clsx";
import { Divider } from "@heroui/divider";
import { Repository } from "aws-cdk-lib/aws-ecr";

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

interface EmployeeFormProps {
  defaultValues?: Employee;
  onSubmit: (data: Employee) => void;
  isLoading: boolean;
}

const EmployeeForm: React.FC<EmployeeFormProps> = (props) => {
  const { defaultValues, onSubmit, isLoading } = props;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Employee>({ defaultValues });

  return (
    <>
      <Divider className="mb-12" />

      <Form className={clsx("max-w-lg")} onSubmit={handleSubmit(onSubmit)}>
        <div className={clsx("flex flex-col gap-8 w-full mb-12")}>
          <Input {...register("firstName")} label="First name" size="sm" />
          <Input {...register("lastName")} label="Last name" size="sm" />

          <DatePicker
            className={clsx("w-56")}
            label="Date of birth"
            showMonthAndYearPickers
            size="sm"
          />

          <Input {...register("email")} label="Email" size="sm" />

          <Select
            {...register("team")}
            className={clsx("w-56")}
            label="Team"
            size="sm"
            items={teams}
          >
            {(team) => <SelectItem>{team.label}</SelectItem>}
          </Select>

          <Select
            {...register("role")}
            className={clsx("w-56")}
            label="Role"
            size="sm"
            items={roles}
          >
            {(role) => <SelectItem>{role.label}</SelectItem>}
          </Select>

          <Textarea {...register("notes")} label="Notes" size="sm" />
        </div>

        <div className={clsx("flex gap-4")}>
          <Button color="primary" type="submit" isLoading={isLoading}>
            Submit
          </Button>
          <Button type="reset" variant="bordered">
            Reset
          </Button>
        </div>
      </Form>
    </>
  );
};

export default EmployeeForm;
