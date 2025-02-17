import PageHeader from "@/components/page/pageHeader";
import DefaultLayout from "@/layouts/default";
import { Input } from "@heroui/input";
import { Button } from "@heroui/button";
import clsx from "clsx";

const EmployeesPage = () => {
  return (
    <DefaultLayout>
      <PageHeader>
        <div>
          <PageHeader.Title>Employees</PageHeader.Title>
          <PageHeader.Description>
            Coming soon, probably... 🚧
          </PageHeader.Description>
        </div>

        <Button color="primary">Add employee</Button>
      </PageHeader>

      <div>
        <Input
          className={clsx("w-60")}
          size="sm"
          placeholder="Type to search"
        />
      </div>
    </DefaultLayout>
  );
};

export default EmployeesPage;
